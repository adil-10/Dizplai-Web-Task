import React, { useEffect, useState } from "react";
import Axios from 'axios';

const VotingPage = () => {
    const [pollData, setPollData] = useState("");

    useEffect(() => {
        Axios.get('http://localhost:3003/getPollData')
            .then((response) => {
                if (response.status === 200) {
                    setPollData(response.data);
                    console.log(response.data);
                }
            })
            .catch((error) => {
                console.log("Unknown error", error);
            });
    }, []);

    return (
        <div className="votingPageContainer">
            <header>
                <h1>Voting page</h1>
                <h2>Choose your winner!</h2>
            </header>

            <main>
                <p>{pollData.question}</p>
            </main>

            <footer>
                <p>This is my footer</p>
            </footer>
        </div>
    );
};

export default VotingPage;