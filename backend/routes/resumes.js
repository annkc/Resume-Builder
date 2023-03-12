const express = require('express');
const router = express.Router();
const {getResumes, getSingleResume, postResume} = require('../controllers/resumeController');


// GET a single resume
router.get('/:id', getSingleResume);

// POST a new resume
router.post('/', postResume);

// GET all resumes
// this is actually /api/resumes/
// so when we go to the link /api/resumes, the "getResumes" function fires
router.get('/', getResumes);



module.exports = router;