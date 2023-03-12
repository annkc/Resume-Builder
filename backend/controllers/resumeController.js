const express = require('express');
const mongoose = require('mongoose');
const Resume = require('../models/resumeModel');

// GET single resume
const getSingleResume = async(req, res) => {
    // this is getting the "/:id" from the link "/api/resumes/:id"
    const {id} = req.params;

    const resume = await Resume.findById(id);

    // if the resume we're looking for DNE
    if (!resume) {
        return res.status(404).json({error: 'Resume does not exist'});
    }

    res.status(200).json(resume);
}


// GET all resumes
const getResumes = async(req, res) => {

    const resumes = await Resume.find({});
    
    res.status(200).json(resumes);
}


const postResume = async(req, res) => {
    const {title, name, phoneNumber, email, website, education, objectives, workExperience, projects, extraCurricularActivities, awardsAndAchievements} = req.body;

    try {
        const resume = await Resume.create({title, name, phoneNumber, email, website, education, objectives, workExperience, projects, extraCurricularActivities, awardsAndAchievements});
        res.status(200).json(resume);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {getResumes, getSingleResume, postResume};