// voteCounter.js
export function countVotes(data, setDataOption1, setDataOption2, setDataOption3, setDataOption4, setFinalData) {
    let countDataOptions1 = 0;
    let countDataOptions2 = 0;
    let countDataOptions3 = 0;
    let countDataOptions4 = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i] === 1) {
            countDataOptions1++;
        } else if (data[i] === 2) {
            countDataOptions2++;
        } else if (data[i] === 3) {
            countDataOptions3++;
        } else if (data[i] === 4) {
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
}
