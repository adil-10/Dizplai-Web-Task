import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Results = () => {
    const [dataOption1, setDataOption1] = useState(0);
    const [dataOption2, setDataOption2] = useState(0);
    const [dataOption3, setDataOption3] = useState(0);
    const [dataOption4, setDataOption4] = useState(0);
    const [finalData, setFinalData] = useState(0);
    const [results, setResults] = useState([]);

    const getData = async () => {
        Axios.get('http://localhost:3003/getResult')
            .then((response) => {
                if (response.status === 200) {
                    console.log('Server Response:', response.data);
                    setResults(response.data);
                    countVotes()
                }

            })
            .catch((error) => {
                console.log("Unknown error", error);
            });
    };

    function countVotes() {

        let countDataOptions1 = 0;
        let countDataOptions2 = 0;
        let countDataOptions3 = 0;
        let countDataOptions4 = 0;

        for (let i = 0; i < results.length; i++) {
            if (results[i] === 1) {
                countDataOptions1++;
            }
            else if (results[i] === 2) {
                countDataOptions2++;
            }
            else if (results[i] === 3) {
                countDataOptions3++;
            }
            else if (results[i] === 4) {
                countDataOptions4++;
            }
        }
        setDataOption1(countDataOptions1);
        setDataOption2(countDataOptions2);
        setDataOption3(countDataOptions3);
        setDataOption4(countDataOptions4);
        setFinalData(results.length);
        console.log("The data in my count function " + countDataOptions1 + ' ' + countDataOptions2 + ' ' + countDataOptions3 + ' ' + countDataOptions4)

    }

    useEffect(() => {
        // console.log(dataOption1 + ' ' + dataOption2 + ' ' + dataOption3 + ' ' + dataOption4)
        getData();
    }, []);


    return (
        <div>
            <header>
                <h1>Results</h1>
            </header>

            <main>
                <p>{dataOption1}</p>
                <p>{dataOption2}</p>
                <p>{dataOption3}</p>
                <p>{dataOption4}</p>
                <p>{finalData}</p>
                {/* <button onClick={countVotes}>click me</button> */}
            </main>

            <footer>
                <p>This is my footer</p>
            </footer>
        </div>
    );
};

export default Results;