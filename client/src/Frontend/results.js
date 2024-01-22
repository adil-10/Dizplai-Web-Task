//Order results based on percentages

import React, { useEffect, useState } from "react";
import "../FrontendDesign/Results.css"
import Axios from 'axios';
import { countVotes } from './CountVotes';

const Results = () => {
    //Variables to store data
    const [dataOption1, setDataOption1] = useState(0);
    const [dataOption2, setDataOption2] = useState(0);
    const [dataOption3, setDataOption3] = useState(0);
    const [dataOption4, setDataOption4] = useState(0);
    const [finalData, setFinalData] = useState(0);

    // Function to fetch data from the server
    const getData = async () => {
        try {
            const response = await Axios.get('http://localhost:3003/getResult');
            if (response.status === 200) {
                // Call countVotes function to calculate percentages and update state
                countVotes(response.data, setDataOption1, setDataOption2, setDataOption3, setDataOption4, setFinalData);
                // Extract percentages from variables
                const percentages = [dataOption1, dataOption2, dataOption3, dataOption4];
                //Sort the percenatges
                percentages.sort((a, b) => b - a);
                console.log(percentages)
            }
            else {
                window.alert("Unexpected error: please try again later")
            }
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData();
    },);

    return (
        <div className="resultsPageContainer">
            <header>
                <h1 className="resultsPageTitle">Thank you for your response</h1>
            </header>

            <main>
                <div className="result1">
                    <h2>Erling Haaland: {dataOption1}%</h2>
                </div>
                <div className="result2">
                    <h2>Mohamed Salah: {dataOption2}%</h2>
                </div>
                <div className="result3">
                    <h2>Dominic Solanke: {dataOption3}%</h2>
                </div>
                <div className="result4">
                    <h2>Son Heung-Min: {dataOption4}%</h2>
                </div>
                <div className="finalScore">
                    <p>Total Votes: {finalData}</p>
                </div>
            </main>

            <footer className="footerResultsContainer">
                <p>Created by Adil Badat</p>
            </footer>
        </div>
    );
};
export default Results;