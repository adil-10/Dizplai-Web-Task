const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'votingSystemDB'
});

app.get("/", (req, res) => {
    const sqlInsert = "INSERT INTO Votes (Liverpool) VALUES ('1');"
    db.query(sqlInsert, (err, result) => {
        res.send("hello badat");
    })
})

app.listen(3003, () => {
    console.log("running on port 3003");
});