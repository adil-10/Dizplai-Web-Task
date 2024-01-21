const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

const e = require('express');

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3002"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(bodyParser.json());

//Poll data 
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

// Root - sends a simple greeting
app.get("/", (req, res) => { res.send("Hello"); })

//Send poll data as JSON to gain access to data on the client side
app.get("/getPollData", (req, res) => {
    const pollId = req.params.id;
    res.json(pollData);
});

// Initialise an empty array to store vote data
let voteData = [];
// Handle the submission of votes
app.post('/submitVote', (req, res) => {
    const response = {
        voteData,
        message: 'Vote submitted successfully',
    };
    try {
        // Extract the selected option from the request body sent by the client
        const { selectedOption } = req.body;
        //Push selectedOption data to voteData array
        voteData.push(selectedOption);
        res.status(200).send(response);
    }
    catch (error) {
        res.send(error);
    }
});

//Get vote
app.get('/getResult', (req, res) => {
    res.send(voteData)
});

app.listen(3003, () => {
    console.log("running on port 3003");
});

