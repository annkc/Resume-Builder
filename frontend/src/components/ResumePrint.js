import { useState, useEffect} from "react";
import { useParams} from "react-router-dom";
import styles from './ResumePrint.module.css'
import { listItem } from "./Form";

/**
 * Displays the part of a resume's information that appears in the formatted version to be saved
 * as a PDF.
 * 
 * @returns {div} display of most of the resume's details to be in PDF
 */    
const ResumePrint = () => {
    const {id} = useParams();
    const [resume, setResume] = useState(null);
    
    /**
     * Fetching the specific resume from the database.
     */
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

    /**
     * Displaya a listItem on the page.
     * 
     * @param {listItem} item 
     * @returns {div} display of item
     */
    function renderListItem(item) {
        return <div>
            <p>{item.title}</p>
            <ul>{item.details.map(renderListItemDetail)}</ul>
        </div>
    }

    /**
     * Displays a detail of a listItem on the page.
     * 
     * @param {string} detail 
     * @returns {li} display of detail
     */
    function renderListItemDetail(detail) {
        if (detail !== "") {
            return (<li> {detail} </li>);
        }
    }

    /**
     * Creates a string of all the data in a listItem concatenated together.
     * 
     * @param {listItem} item 
     * @returns {string} item's fields concatenated
     */
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
                {resume.website !== "" && <span>{resume.website}</span>}
                </div>}
    

            {resume && resume.education && resume.education !== "" &&
            <div>
                <h3><br></br>Education</h3> 
                <p>{resume && resume.education}</p>
                </div>}


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