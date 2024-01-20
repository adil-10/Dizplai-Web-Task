//create end points
//send poll data
//send votes

const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

// const mysql = require('mysql');

// const mysql = require("mysql");

// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'votingSystemDB'
// });
const e = require('express');

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3002"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(bodyParser.json());

const pollData = {
    pollId: 1,
    pollName: 'Golden Boot Winner',
    question: 'Who will win the Golden Boot?',
    options: [
        { optionId: 1, optionText: 'Erling Haaland' },
        { optionId: 2, optionText: 'Mohamed Salah' },
        { optionId: 3, optionText: 'Dominic Solanke' },
        { optionId: 4, optionText: 'Son Heung-Min' }
    ],
};


app.get("/", (req, res) => { res.send("hello badat"); })

app.get("/getPollData", (req, res) => {
    res.json(pollData);
})


app.listen(3003, () => {
    console.log("running on port 3003");
});

