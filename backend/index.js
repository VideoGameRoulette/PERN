//IMPORT LOCAL ENV VARIABLES
if (process.env.NODE_ENV !== 'production') require('dotenv').config;
//IMPORT EXPRESS LIBRARIES
const express = require('express');
//const request = require('request');
const app = express();
//IMPORT EXTERNAL LIBRARIES
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

//IMPORT CUSTOM LIBRARIES
const pool = require('./db');
//SET PORT VARIABLE
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const RA_AuthQS = () => {
    return `?z=${process.env.RA_USERNAME}&y=${process.env.RA_CLIENTID}`;
};

//UPDATE USER DATE
app.put("/api/rauser/:id", async (req, res) => {
    try {
        const { retro } = req.body;
        const userResults = await pool.query("UPDATE users SET retro = $1 WHERE u_id = $2", [retro, req.params.id]);
        res.json(userResults.rows[0]);
    }
    catch (error) {
        console.error(error.message);
    }
})

//ex http://localhost:3001/games/retroachievements/progress?user=videogameroulette&gameid=350
// app.get('/ra/achievements', (req, res) => {
//     var url = `https://retroachievements.org/API/API_GetGameInfoAndUserProgress.php${AuthQS()}&u=${req.query.name
//         }&g=${req.query.gameid}`;
//     request(url, function (err, response, body) {
//         if (!err && response.statusCode < 400) {
//             res.send(body);
//         }
//     });
// });

//CREATE NEW USER
app.post("/api/register", async (req, res) => {
    try {
        const { username } = req.body;
        const newUser = await pool.query("INSERT INTO users (u_id, username) VALUES($1, $2)", [uuidv4(), username]);
        res.json(newUser.rows[0]);
    }
    catch (error) {
        console.error(error.message);
    }
});

//GET USER DATA
app.get("/api/users", async (req, res) => {
    try {
        const userResults = await pool.query("SELECT * FROM users");
        res.json(userResults.rows);
    }
    catch (error) {
        console.error(error.message);
    }
});

//GET USER DATA
app.get("/api/user/:id", async (req, res) => {
    try {
        const userResults = await pool.query("SELECT * FROM users WHERE u_id = $1", [req.params.id]);
        res.json(userResults.rows[0]);
    }
    catch (error) {
        console.error(error.message);
    }
});

//UPDATE USER DATE
app.put("/api/user/:id", async (req, res) => {
    try {
        const { username } = req.body;
        const userResults = await pool.query("UPDATE users SET username = $1 WHERE u_id = $2", [username, req.params.id]);
        res.json(userResults.rows[0]);
    }
    catch (error) {
        console.error(error.message);
    }
})

//DELETE USER DATA
app.delete("/api/user/:id", async (req, res) => {
    try {
        const userResults = await pool.query("DELETE FROM users WHERE u_id = $1", [req.params.id]);
        res.json(userResults.rows[0]);
    }
    catch (error) {
        console.error(error.message);
    }
});

//START SERVER
app.listen(PORT, () => {
    console.log('backend started on: http://localhost:' + PORT);
});