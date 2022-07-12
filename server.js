require('dotenv').config();
const express = require('express');
const app = express();

const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// Root route
app.get('/', (req, res) => {
    throw new Error('error')
    res.send('its ok')
});

app.use(notFound)
app.use(errorHandlerMiddleware)
// app.all('*', notFound)
// Server Listening
app.listen(process.env.PORT, () => {
    console.log('I am awake')
});