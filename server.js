require('dotenv').config();
const express = require('express');
const app = express();

const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect')


// Function to connect to DB
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(process.env.PORT, () => {
            console.log('I am awake')
        });
    } catch (err) {
        console.log(err)
    }
}
// Connecting to DB
start();



// Root route
app.get('/', (req, res) => {
    res.send('its ok')
});

// Error handlers
app.use(notFound)
app.use(errorHandlerMiddleware)
// app.all('*', notFound)