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
        if (detail !== "") {
            return (<li> {detail} </li>);
        }
    }

    function joinListItem(item) {
        return item.title + item.details.join('');
    }
    
    const toReturn =
        <div className={styles.resume_print}>
            <h1>{resume && resume.name}</h1>
            <hr></hr>
            {resume && <div className={styles.contact_info}>
                <span>{resume.phoneNumber}</span> 
                <span>{resume.email}</span> 
                <span>{resume.website}</span>
                </div>}
    

            <h3><br></br>Education</h3> 
            <p>{resume && resume.education}</p>


            {(resume && resume.objectives.join('') !== "") && <h3><br></br>Objectives</h3>}
            {resume && resume.objectives.map((objective) => {
                return (<p> {objective} </p>);
            })}

            {(resume && resume.workExperience && resume.workExperience.map(joinListItem).join('') !== "") && <div><h3><br></br>Work Experience</h3> {resume.workExperience.map(renderListItem)}</div>}     

            {(resume && resume.projects && resume.projects.map(joinListItem).join('') !== "") && <div><h3><br></br>Projects</h3> {resume.projects.map(renderListItem)}</div>}

            {(resume && resume.extraCurricularActivities && resume.extraCurricularActivities.map(joinListItem).join('') !== "") && <div><h3><br></br>Extracurricular Activities</h3> {resume.extraCurricularActivities.map(renderListItem)}</div>}  

            {(resume && resume.awardsAndAchievements && resume.awardsAndAchievements.map(joinListItem).join('') !== "") && <div><h3><br></br>Awards and Achievements</h3> {resume.awardsAndAchievements.map(renderListItem)}</div>}
        </div>
    
    return toReturn;
    
}
export default ResumePrint;