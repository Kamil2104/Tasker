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
    const sql = "INSERT INTO users (`Login`, `Password`, `Logged`) values (?, ?, false)"; // SQL query definition 
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
    let sql = "SELECT Name, Description, Date, Priority FROM tasks WHERE `User` = ?";

    const values = [
        req.body.user
    ]

    /* 
    You cannot dynamically provide a column name or sort direction as a parameter in an SQL query. 
    You must build the entire SQL query, including both the column name and sort direction, before passing it to the query function.
    */

    // Check if orderBy and orderType are available
    if (req.body.orderBy && req.body.orderType) {
        // Add ORDER BY to your query with the appropriate values
        sql += ` ORDER BY ${req.body.orderBy} ${req.body.orderType}`;
    }

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json("Error!");
        }

        if (data.length > 0) {
            return res.json(data);
        } else {
            return res.json("No tasks");
        }
    });
});

// DELETE TASK

app.post('/deleteTask', (req, res) => {
    const sql = "DELETE FROM tasks WHERE `User` = ? AND `Name` = ? AND `Description` = ? AND `Date` = ? AND `Priority` = ?"
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
        } else {
            return res.json("Success")
        }
    })
})

// FIND TASKS

app.post('/findTaskByName', (req, res) => {
    let sql = "SELECT Name, Description, Date, Priority FROM tasks WHERE `User` = ? AND `Name` = ?"
    const values = [
        req.body.user,
        req.body.name
    ]

    if (req.body.orderBy && req.body.orderType) {
        sql += ` ORDER BY ${req.body.orderBy} ${req.body.orderType}`;
    }

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json("Error!")
        }

        if (data.length > 0) {
            return res.json(data)
        } else {
            return res.json("No tasks found")
        }
    })
})

app.post('/findTaskByDate', (req, res) => {
    let sql = "SELECT Name, Description, Date, Priority FROM tasks WHERE `User` = ? AND `Date` = ?"
    const values = [
        req.body.user,
        req.body.date
    ]

    if (req.body.orderBy && req.body.orderType) {
        sql += ` ORDER BY ${req.body.orderBy} ${req.body.orderType}`;
    }

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json("Error!")
        }

        if (data.length > 0) {
            return res.json(data)
        } else {
            return res.json("No tasks found")
        }
    })
})

app.post('/findTaskByPriority', (req, res) => {
    let sql = "SELECT Name, Description, Date, Priority FROM tasks WHERE `User` = ? AND `Priority` = ?"
    const values = [
        req.body.user,
        req.body.priority
    ]

    if (req.body.orderBy && req.body.orderType) {
        sql += ` ORDER BY ${req.body.orderBy} ${req.body.orderType}`;
    }

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json("Error!")
        }

        if (data.length > 0) {
            return res.json(data)
        } else {
            return res.json("No tasks found")
        }
    })
})

// UPDATING WHEN USER IS LOGGED IN
app.post('/userLoggedIn', (req, res) => {
    const sql = "UPDATE users SET `Logged` = true WHERE `Login` = ?"
    const values = [
        req.body.login
    ]

    db.query(sql, values, (err) => {
        if (err) {
            return res.json("Error!")
        }

        return res.json("Success")
    })
})


// UPDATING WHEN USER IS LOGGED OUT
app.post('/userLoggedOut', (req, res) => {
    const sql = "UPDATE users SET `Logged` = false WHERE `Login` = ?"
    const values = [
        req.body.login
    ]

    db.query(sql, values, (err) => {
        if (err) {
            return res.json("Error!")
        }

        return res.json("Success")
    })
})

// CHECKING IF USER IS LOGGED IN
app.post('/userIsLoggedIn', (req, res) => {
    const sql = "SELECT * FROM users WHERE `Login` = ? AND `Logged` = true"
    const values = [
        req.body.login
    ]

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json("Error!")
        }

        if (data.length > 0) {
            return res.json("Success")
        } else {
            return res.json("Logged out")
        }
    })
})