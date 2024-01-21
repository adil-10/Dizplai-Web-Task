import React, { useEffect, useState } from "react";
import "../FrontendDesign/Results.css"
import Axios from 'axios';

const Results = () => {
    const [dataOption1, setDataOption1] = useState(0);
    const [dataOption2, setDataOption2] = useState(0);
    const [dataOption3, setDataOption3] = useState(0);
    const [dataOption4, setDataOption4] = useState(0);
    const [finalData, setFinalData] = useState(0);

    const getData = async () => {
        try {
            const response = await Axios.get('http://localhost:3003/getResult');
            if (response.status === 200) {
                countVotes(response.data);
            }
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    function countVotes(data) {
        let countDataOptions1 = 0;
        let countDataOptions2 = 0;
        let countDataOptions3 = 0;
        let countDataOptions4 = 0;




        for (let i = 0; i < data.length; i++) {
            if (data[i] === 1) {
                countDataOptions1++;
            }
            else if (data[i] === 2) {
                countDataOptions2++;
            }
            else if (data[i] === 3) {
                countDataOptions3++;
            }
            else if (data[i] === 4) {
                countDataOptions4++;
            }
        }
        const percentageOption1 = Math.round((countDataOptions1 / data.length) * 100);
        const percentageOption2 = Math.round((countDataOptions2 / data.length) * 100);
        const percentageOption3 = Math.round((countDataOptions3 / data.length) * 100);
        const percentageOption4 = Math.round((countDataOptions4 / data.length) * 100);

        setDataOption1(percentageOption1);
        setDataOption2(percentageOption2);
        setDataOption3(percentageOption3);
        setDataOption4(percentageOption4);
        setFinalData(data.length);

        console.log("The data in my count function: " + countDataOptions1 + ' ' + countDataOptions2 + ' ' + countDataOptions3 + ' ' + countDataOptions4);
    }


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