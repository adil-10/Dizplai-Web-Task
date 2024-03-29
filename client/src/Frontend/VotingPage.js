import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../FrontendDesign/VotingPage.css"
import { submitVotes } from './SubmitVote';

const VotingPage = () => {
    const [pollData, setPollData] = useState({});
    const [selectedOptions, setSelectedOptions] = useState([]);
    const navigate = useNavigate();

    // useEffect hook to fetch poll data when the component mounts
    useEffect(() => {
        Axios.get('http://localhost:3003/getPollData')
            .then((response) => {
                if (response.status === 200) {
                    setPollData(response.data);
                }
                else {
                    window.alert("Unexpected error: please try again later")
                }
            })
            .catch((error) => {
                console.log("Unknown error", error);
            });
    }, []);

    const handleSubmit = () => {
        //If the selectedOptions array is empty
        if (selectedOptions.length === 0) {
            window.alert('Select an option')
        }
        else {
            // Call the submitVote function with the selected option
            submitVotes(selectedOptions, navigate);
        }
    };

    return (
        <div className="votingPageContainer">
            <header>
                <h1 className="votingPageSubHeader">Choose your winner!</h1>
            </header>

            <main className="votingPageMainContainer">
                <h3>{pollData.question}</h3>
                {/* Check if pollData.options is defined before mapping over it */}
                <div className="votingOptions">
                    {pollData.options && pollData.options.map(option => (
                        <div key={option.optionId} className="votingOptionsBox">
                            <input
                                type="radio"
                                id={option.optionId}
                                name="pollOption"
                                value={option.optionId}
                                onChange={(e) => {
                                    setSelectedOptions(parseInt(e.target.value, 10));
                                }}
                            />
                            <label>{option.optionText}</label>
                        </div>
                    ))}
                </div>
                <button className="submitButton" id="submit" onClick={handleSubmit}>Submit</button>
            </main>

            <footer className="footerFooterContainer">
                <p>Created by Adil Badat</p>
            </footer>
        </div>
    );
};

export default VotingPage;
