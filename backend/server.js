const express = require('express');
const resumeRoutes = require('./routes/resumes');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

//middleware
app.use(express.json());

app.use('/api/resumes', resumeRoutes);

//connecting to database
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("connected to database on port ", process.env.PORT);
    });
})
.catch((error) => {
    console.log(error);
});