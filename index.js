// First! Bring in dotenv
require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const app = express();
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const setupAuth = require('./auth');

// tell express to use the session modules
app.use(session({
    store: new FileStore(),  // no options for now
    secret: process.env.SESSION_SECRET
}));

// Only after we have sessions set up with express
// is it ok to attach the passport authentication
setupAuth(app);

app.get('/', (req, res) => {
    res.send(`
        <h1>Hello There</h1>    
    `);
});
app.listen(PORT, () => {
    console.log(`You're running on port ${PORT}`);
});
