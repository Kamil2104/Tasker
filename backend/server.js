// Comments are only in backend, beacuse it's my first time with it and I am trying to learn it

// Import modules
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

// Initializing the Express application
const app = express();
app.use(cors());
app.use(express.json());

// Configuring the connection to the MySQL database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "taskerdb"
})

// Checking if server on port 8081 is running (if it is, then show information on console)
app.listen(8081, () => {
    console.log("Listening");
})

// Setting post endpoint for user account creation
app.post('/createAccount', (req, res) => {
    const sql = "INSERT INTO login ('login', 'password') values (?)"; // SQL query definition 
    const values = [ // Value definition
            req.body.login, // Getting value from input with NAME = "login"
            req.body.password // Getting value from input with NAME = "password"
    ]

    db.query(sql, [values], (err, data) => { // Executing a query to the database AND using callback function '(err, data) =>' to handle the query result
        if(err) { // If error has occured return "Error" as JSON object
            return res.json("Error!")
        }

        return res.json(data); // If error has not occured return data as JSON object 
    });
})