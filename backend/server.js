// Import modules
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

// Initializing the Express application
const app = express();
app.use(cors());

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