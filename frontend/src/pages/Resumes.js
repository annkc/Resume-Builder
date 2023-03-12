import { useEffect, useState } from 'react';
import ResumeDetails from '../components/ResumeDetails';

const Resumes = () => {
    const [resumes, setResumes] = useState(null);

    useEffect(() => {
        const fetchResumes = async () => {
            const response = await fetch('/api/resumes');
            const json = await response.json();
    
            if (response.ok) {
                setResumes(json);
            }
        }

        fetchResumes();
        console.log("resumes", resumes);
    }, [])

    return (
        <div className="resumes">
            <h2>Resume Viewer</h2>
            {resumes && resumes.map((resume) => {
                return <ResumeDetails key={resume._id} resume={ resume }/>
            }
            )}
        </div>
    )
}

export default Resumes;