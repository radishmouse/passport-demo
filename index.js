// First! Bring in dotenv
require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send(`
        <h1>Hello There</h1>    
    `);
});
app.listen(PORT, () => {
    console.log(`You're running on port ${PORT}`);
});
