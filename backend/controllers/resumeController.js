const express = require('express');
const mongoose = require('mongoose');
const Resume = require('../models/resumeModel');

const getSingleResume = async(req, res) => {
    const {id} = req.params;

    const resume = await Resume.findById(id);

    //if the resume we're looking for DNE
    if (!resume) {
        return res.status(404).json({error: 'Resume does not exist'});
    }

    res.json(resume);
}
const getResumes = async(req, res) => {
    const resumes = await Resume.find({});
    
    res.status(200).json(resumes);
    res.json({mssg: 'got all resumes'});
}

const postResume = async(req, res) => {
    const {name, phoneNumber, email, website, education, objectives, workExperience, projects, extracCurricularActivities, awardsAndAchievements} = req.body;

    try {
        const resume = await Resume.create({name, phoneNumber, email, website, education, objectives, workExperience, projects, extracCurricularActivities, awardsAndAchievements});
        res.status(200).json(resume);
    } catch (error) {
        res.status(400).json({error: error.message});
    }

    res.json({mssg: 'posted a resume'});
}

module.exports = {getResumes, getSingleResume, postResume};