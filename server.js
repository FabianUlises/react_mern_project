require('dotenv').config();
const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
    res.send('its ok')
});
// Server Listening
app.listen(process.env.PORT, () => {
    console.log('I am awake')
});