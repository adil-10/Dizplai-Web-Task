import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


const Results = () => {

    const [dataOption1, setDataOption1] = useState(0);
    const [dataOption2, setDataOption2] = useState(0);
    const [dataOption3, setDataOption3] = useState(0);
    const [dataOption4, setDataOption4] = useState(0);
    const [finalData, setFinalData] = useState(0);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("id")) || [];
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
        setDataOption1(countDataOptions1);
        setDataOption2(countDataOptions2);
        setDataOption3(countDataOptions3);
        setDataOption4(countDataOptions4);
        setFinalData(data.length);
    })

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

            </main>

            <footer>
                <p>This is my footer</p>
            </footer>
        </div>
    );
};

export default Results;