import styles from './ResumeSnippet.module.css'
import {Link} from 'react-router-dom';

const ResumeSnippet = ({resume}) => {
    return (
        <div className={styles.resume_snippet}>
             <Link to={`/resume/${resume._id}`}>
                <h4>{resume.title}</h4>
                <p>Created at: {resume.createdAt}</p>
            </Link>
        </div>
    )

export default ResumeSnippet;