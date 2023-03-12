const express = require('express');
const router = express.Router();
const {getResumes, getSingleResume, postResume} = require('../controllers/resumeController')

router.get('/:id', getSingleResume);

router.post('/', postResume);

//this is actually /api/resumes/
router.get('/', getResumes);

module.exports = router;