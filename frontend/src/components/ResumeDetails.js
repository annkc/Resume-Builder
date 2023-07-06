import { useState, useEffect} from "react";
import { useParams} from "react-router-dom";
import styles from './ResumeSnippet.module.css'
    
const ResumeDetails = () => {
    const {id} = useParams();
    const [resume, setResume] = useState(null);
    
    const fetchResume = async () => {
        console.log("fetching....")
        const response = await fetch('http://localhost:4000/api/resumes/' + id);
        const json = await response.json();
        if (response.ok) {
            setResume(json);
        }
    }
    
    useEffect(() => {
        console.log("in ue")
        fetchResume();
    }, [])
    
    return (
        <div className={styles.resume_details}>
            <h4>{resume && resume.title}</h4>
            <p><strong>Created at:</strong> {resume && resume.createdAt}</p>
            <p><strong>Name: </strong> {resume && resume.phoneNumber}</p>
            <p><strong>Email: </strong> {resume && resume.email}</p>
            <p><strong>Website: </strong> {resume && resume.website}</p>
            <p><strong>Education: </strong> {resume && resume.education}</p>
        </div>
            // <div className="">
            //     <div className="">Hiii</div>
            // </div>

    )
}
export default ResumeDetails;
