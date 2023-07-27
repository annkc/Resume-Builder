import { useEffect, useState } from 'react';
import ResumeSnippet from '../components/ResumeSnippet';

import styles from './Resumes.module.css'

/**
 * Page that lists all existing resumes.
 * 
 * @returns {div} display of resume list page
 */
const Resumes = () => {
    const [resumes, setResumes] = useState(null);

    /**
     * Fetching all resumes from the database.
     */
    useEffect(() => {
        const fetchResumes = async () => {
            const response = await fetch('http://localhost:4000/api/resumes');
            const json = await response.json();
    
            if (response.ok) {
                setResumes(json);
            }
        }

        fetchResumes();
    }, [])

    return (
        <div className={styles.resumes}>
            <h2>Resume Viewer</h2>
            {resumes && resumes.map((resume) => {
                return <ResumeSnippet key={resume._id} resume={ resume }/>
            }
            )}
        </div>
    )
}

export default Resumes;