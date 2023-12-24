// Comments are only in backend, beacuse it's my first time with it and I am trying to learn it

// Import modules
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

// Initializing the Express application
const app = express();
app.use(express.json());
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

// CREATE ACCOUNT 

// Setting post endpoint for user account creation
app.post('/createAccount', (req, res) => {
    const sql = "INSERT INTO users (`Login`, `Password`) values (?, ?)"; // SQL query definition 
    const values = [ // Value definition (these are comming from JavaScript object named 'values' (it's passed in CreateAccount.jsx next to link))
        req.body.login, // Getting value from input with NAME = "login"
        req.body.password // Getting value from input with NAME = "password"
    ]

    db.query(sql, values, (err) => { // Executing a query to the database AND using callback function '(err, data) =>' to handle the query result
        if (err) { // If error has occured return "Error" as JSON object
            return res.json("Error")
        } else {
            return res.json("Success");
        }
    });
})

// LOGGING IN

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE `Login` = ? AND `Password` = ?";
    const values = [
        req.body.login,
        req.body.password
    ]

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json("Error!")
        }

        if (data.length > 0) {
            return res.json("Success")
        } else {
            return res.json("Fail")
        }
    });
})

// CHANGE PASSWORD

app.post('/changePassword', (req, res) => {
    const sql = "SELECT * FROM users WHERE `Login` = ? AND `Password` = ?"
    const values = [
        req.body.login,
        req.body.oldPassword,
        req.body.newPassword
    ]

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json("Error!")
        }

        if (data.length > 0) {
            const sql = "UPDATE users SET `Password` = ? WHERE `Login` = ?"
            const newPasswordValues = [
                req.body.newPassword,
                req.body.login
            ]

            db.query(sql, newPasswordValues, (err) => {
                if (err) {
                    return res.json("Error!")
                }

                return res.json("Success")
            })
        } else {
            return res.json("Incorrect login or old password.")
        }
    })
})

// ADD TASK

app.post('/addTask', (req, res) => {
    const sql = "INSERT INTO tasks (User, Name, Description, Date, Priority) values (?, ?, ?, ?, ?)"
    const values = [
        req.body.user,
        req.body.name,
        req.body.description,
        req.body.date,
        req.body.priority
    ]

    db.query(sql, values, (err) => {
        if (err) {
            return res.json("Error!")
        }

        return res.json("Success")
    })
})

// SHOW TASKS

app.post('/showTasks', (req, res) => {
    const sql = "SELECT Name, Description, Date, Priority FROM tasks WHERE `User` = ? ORDER BY Name ASC"
    const values = [
        req.body.user
    ]

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json("Error!")
        }

        if (data.length > 0) {
            return res.json(data)
        } else {
            return res.json("No tasks")
        }
    })
})