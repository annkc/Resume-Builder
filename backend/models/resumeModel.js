const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resumeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: false
    },
    education: {
        type: String,
        required: false
    },
    objectives: {
        type: Array,
        required: false
    },
    workExperience: {
        type: Array,
        required: false
    },
    projects: {
        type: Array,
        required: false
    },
    extracCurricularActivities: {
        type: Array,
        required: false
    },
    awardsAndAchievements: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model('resume', resumeSchema);