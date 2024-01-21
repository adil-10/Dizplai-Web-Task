import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VotingPage = () => {
    const [pollData, setPollData] = useState({});
    const [selectedOptions, setSelectedOptions] = useState([]);

    //Navigation to results page
    const navigate = useNavigate();
    const toResultsPage = () => {
        navigate('../Results');
    };
    // useEffect hook to fetch poll data when the component mounts
    useEffect(() => {
        Axios.get('http://localhost:3003/getPollData')
            .then((response) => {
                if (response.status === 200) {
                    setPollData(response.data);
                }
            })
            .catch((error) => {
                console.log("Unknown error", error);
            });
    }, []);


    const submitVote = async (selectedOption) => {
        try {
            // Make a POST request to your backend API with the selected option
            const response = await Axios.post('http://localhost:3003/submitVote', {
                selectedOption,
            });
            //If the response is 200 success
            if (response.status === 200) {
                // Retrive the data from local storage with the key id, if the array is populated or not 
                const data = JSON.parse(localStorage.getItem("id")) || [];
                //Push the selected option to the data array
                data.push(selectedOption);
                //Add it to the local storage where the key = id 
                localStorage.setItem("id", JSON.stringify(data));
                // If the vote is successfully submitted, navigate to the results page
                toResultsPage();
            }
            else {
                console.error('Failed to submit vote');
            }
        } catch (error) {
            console.error('Error submitting vote', error);
        }
    };

    const handleSubmit = () => {
        // Call the submitVote function with the selected option
        submitVote(selectedOptions);
    };




    return (
        <div className="votingPageContainer">
            <header>
                <h1>Voting page</h1>
                <h2>Choose your winner!</h2>
            </header>

            <main>
                <p>{pollData.question}</p>
                {/* Check if pollData.options is defined before mapping over it */}
                {pollData.options && pollData.options.map(option => (
                    <div key={option.optionId}>
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
                <button id="submit" onClick={handleSubmit}>Submit</button>

            </main >

            <footer>
                <p>This is my footer</p>
            </footer>
        </div >
    );
};

export default VotingPage;