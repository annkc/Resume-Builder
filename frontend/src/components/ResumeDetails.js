import { useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import styles from './ResumeDetails.module.css'
import { listItem } from "./Form";
    
/**
 * Displays all of a resume's information, including all of the uesr's inputs and when it was created.
 * 
 * @returns {div} display of all of a resume's details
 */

const ResumeDetails = () => {
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
        <div className={styles.resume_details}>
            <h4>{resume && resume.title}</h4>
            <p><strong>Created at:</strong> {resume && resume.createdAt}</p>
            <p><strong>Name: </strong> {resume && resume.name}</p>
            <p><strong>Phone: </strong> {resume && resume.phoneNumber}</p>
            <p><strong>Email: </strong> {resume && resume.email}</p>
            <p><strong>Website: </strong> {resume && resume.website}</p>
            <p><strong>Education: </strong> {resume && resume.education}</p>


            {(resume && resume.objectives.join('') !== "") && <p><br></br><strong>Objectives:</strong></p>}
            {resume && resume.objectives.map((objective) => {
                return (<p> {objective} </p>);
            })}

            {(resume && resume.workExperience && resume.workExperience.map(joinListItem).join('') !== "") && <div><p><br></br><strong>Work Experience:</strong></p> {resume.workExperience.map(renderListItem)}</div>}     

            {(resume && resume.projects && resume.projects.map(joinListItem).join('') !== "") && <div><p><br></br><strong>Projects:</strong></p> {resume.projects.map(renderListItem)}</div>}

            {(resume && resume.extraCurricularActivities && resume.extraCurricularActivities.map(joinListItem).join('') !== "") && <div><p><br></br><strong>Extracurricular Activities:</strong></p> {resume.extraCurricularActivities.map(renderListItem)}</div>}  

            {(resume && resume.awardsAndAchievements && resume.awardsAndAchievements.map(joinListItem).join('') !== "") && <div><p><br></br><strong>Awards and Achievements:</strong></p> {resume.awardsAndAchievements.map(renderListItem)}</div>}
            
            <Link to={`/resume-print/${id}`} target='_blank'>
                <br></br><button>Open Page For Printing</button>
            </Link>
            
            <Link to={'/guide'}>
                <h3><br></br>See how to print with browser</h3>
            </Link>
        
        </div>
    
    return toReturn;
    
}
export default ResumeDetails;
