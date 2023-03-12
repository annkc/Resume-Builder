import { useEffect, useState } from "react";
import ResumeDetails from '../components/ResumeDetails';

const Resumes = () => {
    const [resumes, setResumes] = useState(null);

    const fetchResumes = async () => {
        const response = await fetch('/api/resumes');
        const json = await response.json();

        if (response.ok) {
            setResumes(json);
        }
    }

    useEffect(() => {
        fetchResumes();
    }, [])

    return (
        <div className="resumes">
            <h2>Resume Viewer</h2>
            {resumes && resumes.map((resume) => {
                return <ResumeDetails resume={resume}/>
            })}
        </div>
    )
}

export default Resumes;