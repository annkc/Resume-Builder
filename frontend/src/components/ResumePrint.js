import { useState, useEffect} from "react";
import { useParams} from "react-router-dom";
import styles from './ResumePrint.module.css'
import listItem from './Form'
    
const ResumePrint = () => {
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

    function renderListItem(item) {
        return <div>
            <p>{item.title}</p>
            <ul>{item.details.map(renderListItemDetail)}</ul>
        </div>
    }

    function renderListItemDetail(detail) {
        return (<li> {detail} </li>);
    }
    
    const toReturn =
        <div className={styles.resume_print}>
            <h1>{resume && resume.phoneNumber}</h1>
            <p>{resume && resume.email}</p>
            <p>{resume && resume.website}</p>
            <p><strong>Education: </strong> {resume && resume.education}</p>


            {(resume && (resume.objectives[0] !== "" || resume.objectives[1] !== "")) && <p><br></br><strong>Objectives:</strong></p>}
            {resume && resume.objectives.map((objective) => {
                return (<p> {objective} </p>);
            })}

            {(resume && resume.workExperience && resume.workExperience.length > 0) && <div><p><br></br><strong>Work Experience:</strong></p> {resume.workExperience.map(renderListItem)}</div>}     

            {(resume && resume.projects && resume.projects.length > 0) && <div><p><br></br><strong>Projects:</strong></p> {resume.projects.map(renderListItem)}</div>}

            {(resume && resume.extraCurricularActivities && resume.extraCurricularActivities.length > 0) && <div><p><br></br><strong>Extracurricular Activities:</strong></p> {resume.extraCurricularActivities.map(renderListItem)}</div>}  

            {(resume && resume.awardsAndAchievements && resume.awardsAndAchievements.length > 0) && <div><p><br></br><strong>Awards and Achievements:</strong></p> {resume.awardsAndAchievements.map(renderListItem)}</div>}
        </div>
    
    return toReturn;
    
}
export default ResumePrint;