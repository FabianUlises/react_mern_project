require('dotenv').config();
const express = require('express');
const app = express();

const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect');
// Routers
const authRouter = require('./routers/authRouter');
const jobsRouter = require('./routers/jobsRouter');

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
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);
// Error handlers
app.use(notFound)
app.use(errorHandlerMiddleware)
// app.all('*', notFound)