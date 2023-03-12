const express = require('express');
const resumeRoutes = require('./routes/resumes');

// now we're making an app
const app = express();

// getting mongo yay
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// middleware
app.use(express.json());

// these are routes
app.use('/api/resumes', resumeRoutes);

// connecting to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {

    app.listen(process.env.PORT, () => {
        console.log("connected to database, on port ", process.env.PORT);
    });

})
.catch((error) => {
    console.log(error);
});

