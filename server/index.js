const express = require("express");
const mysql = require('mysql');

const PORT = process.env.PORT || 3001;

const app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "forms"
});

app.get("/forms", (req, res) => {
    
    
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});