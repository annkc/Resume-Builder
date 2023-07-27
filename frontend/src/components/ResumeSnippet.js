import styles from './ResumeSnippet.module.css'
import {Link} from 'react-router-dom';

/**
 * Displays a snippet of a given resume with its title and time created.
 * 
 * @param {object} resume see resumeModel in backend for resume model
 * @returns {div} display of snippet of resume's information
 */

const ResumeSnippet = ({resume}) => {
    return (
        <div className={styles.resume_snippet}>
             <Link to={`/resume/${resume._id}`}>
                <h4>{resume.title}</h4>
                <p>Created at: {resume.createdAt}</p>
            </Link>
        </div>
    )
}

export default ResumeSnippet;