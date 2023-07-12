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
    
    const toReturn =
        <div className={styles.resume_details} id="resume">
            <h4>{resume && resume.title}</h4>
            <p><strong>Created at:</strong> {resume && resume.createdAt}</p>
            <p><strong>Name: </strong> {resume && resume.phoneNumber}</p>
            <p><strong>Email: </strong> {resume && resume.email}</p>
            <p><strong>Website: </strong> {resume && resume.website}</p>
            <p><strong>Education: </strong> {resume && resume.education}</p>


            {(resume && (resume.objectives[0] !== "" || resume.objectives[1] !== "")) && <br></br>}
            <p><strong>{(resume && (resume.objectives[0] !== "" || resume.objectives[1] !== "")) && "Objectives:"}</strong></p>
            <p>{(resume && resume.objectives[0] !== "") && resume.objectives[0]}</p>
            <p>{(resume && resume.objectives[1] !== "") && resume.objectives[1]}</p>


            {(resume && (resume.workExperience[0] !== "" || resume.workExperience[6] !== "" || resume.workExperience[12] !== "")) && <br></br>}
            <p><strong>{(resume && (resume.workExperience[0] !== "" || resume.workExperience[6] !== "" || resume.workExperience[12] !== "")) && "Work Experience:"}</strong></p>
            <p>{(resume && resume.workExperience[0] !== "") && resume.workExperience[0]}</p>
            <ul>
                {(resume && resume.workExperience[0] !== "" && resume.workExperience[1] !== "") && <li>{resume.workExperience[1]}</li>}
                {(resume && resume.workExperience[0] !== "" && resume.workExperience[2] !== "") && <li>{resume.workExperience[2]}</li>}
                {(resume && resume.workExperience[0] !== "" && resume.workExperience[3] !== "") && <li>{resume.workExperience[3]}</li>}
                {(resume && resume.workExperience[0] !== "" && resume.workExperience[4] !== "") && <li>{resume.workExperience[4]}</li>}
                {(resume && resume.workExperience[0] !== "" && resume.workExperience[5] !== "") && <li>{resume.workExperience[5]}</li>}
            </ul>
            <p>{(resume && resume.workExperience[6] !== "") && resume.workExperience[6]}</p>
            <ul>
                {(resume && resume.workExperience[6] !== "" && resume.workExperience[7] !== "") && <li>{resume.workExperience[7]}</li>}
                {(resume && resume.workExperience[6] !== "" && resume.workExperience[8] !== "") && <li>{resume.workExperience[8]}</li>}
                {(resume && resume.workExperience[6] !== "" && resume.workExperience[9] !== "") && <li>{resume.workExperience[9]}</li>}
                {(resume && resume.workExperience[6] !== "" && resume.workExperience[10] !== "") && <li>{resume.workExperience[10]}</li>}
                {(resume && resume.workExperience[6] !== "" && resume.workExperience[11] !== "") && <li>{resume.workExperience[11]}</li>}
            </ul>
            <p>{(resume && resume.workExperience[12] !== "") && resume.workExperience[12]}</p>
            <ul>
                {(resume && resume.workExperience[12] !== "" && resume.workExperience[13] !== "") && <li>{resume.workExperience[13]}</li>}
                {(resume && resume.workExperience[12] !== "" && resume.workExperience[14] !== "") && <li>{resume.workExperience[14]}</li>}
                {(resume && resume.workExperience[12] !== "" && resume.workExperience[15] !== "") && <li>{resume.workExperience[15]}</li>}
                {(resume && resume.workExperience[12] !== "" && resume.workExperience[16] !== "") && <li>{resume.workExperience[16]}</li>}
                {(resume && resume.workExperience[12] !== "" && resume.workExperience[17] !== "") && <li>{resume.workExperience[17]}</li>}
            </ul>


            {(resume && (resume.projects[0] !== "" || resume.projects[6] !== "" || resume.projects[12] !== "")) && <br></br>}
            <p><strong>{(resume && (resume.projects[0] !== "" || resume.projects[6] !== "" || resume.projects[12] !== "")) && "Projects:"}</strong></p>
            <p>{(resume && resume.projects[0] !== "") && resume.projects[0]}</p>
            <ul>
                {(resume && resume.projects[0] !== "" && resume.projects[1] !== "") && <li>{resume.projects[1]}</li>}
                {(resume && resume.projects[0] !== "" && resume.projects[2] !== "") && <li>{resume.projects[2]}</li>}
                {(resume && resume.projects[0] !== "" && resume.projects[3] !== "") && <li>{resume.projects[3]}</li>}
                {(resume && resume.projects[0] !== "" && resume.projects[4] !== "") && <li>{resume.projects[4]}</li>}
                {(resume && resume.projects[0] !== "" && resume.projects[5] !== "") && <li>{resume.projects[5]}</li>}
            </ul>
            <p>{(resume && resume.projects[6] !== "") && resume.projects[6]}</p>
            <ul>
                {(resume && resume.projects[6] !== "" && resume.projects[7] !== "") && <li>{resume.projects[7]}</li>}
                {(resume && resume.projects[6] !== "" && resume.projects[8] !== "") && <li>{resume.projects[8]}</li>}
                {(resume && resume.projects[6] !== "" && resume.projects[9] !== "") && <li>{resume.projects[9]}</li>}
                {(resume && resume.projects[6] !== "" && resume.projects[10] !== "") && <li>{resume.projects[10]}</li>}
                {(resume && resume.projects[6] !== "" && resume.projects[11] !== "") && <li>{resume.projects[11]}</li>}
            </ul>
            <p>{(resume && resume.projects[12] !== "") && resume.projects[12]}</p>
            <ul>
                {(resume && resume.projects[12] !== "" && resume.projects[13] !== "") && <li>{resume.projects[13]}</li>}
                {(resume && resume.projects[12] !== "" && resume.projects[14] !== "") && <li>{resume.projects[14]}</li>}
                {(resume && resume.projects[12] !== "" && resume.projects[15] !== "") && <li>{resume.projects[15]}</li>}
                {(resume && resume.projects[12] !== "" && resume.projects[16] !== "") && <li>{resume.projects[16]}</li>}
                {(resume && resume.projects[12] !== "" && resume.projects[17] !== "") && <li>{resume.projects[17]}</li>}
            </ul>


            {(resume && (resume.extraCurricularActivities[0] !== "" || resume.extraCurricularActivities[6] !== "" || resume.extraCurricularActivities[12] !== "")) && <br></br>}
            <p><strong>{(resume && (resume.extraCurricularActivities[0] !== "" || resume.extraCurricularActivities[6] !== "" || resume.extraCurricularActivities[12] !== "")) && "Extracurricular Activities:"}</strong></p>
            <p>{(resume && resume.extraCurricularActivities[0] !== "") && resume.extraCurricularActivities[0]}</p>
            <ul>
                {(resume && resume.extraCurricularActivities[0] !== "" && resume.extraCurricularActivities[1] !== "") && <li>{resume.extraCurricularActivities[1]}</li>}
                {(resume && resume.extraCurricularActivities[0] !== "" && resume.extraCurricularActivities[2] !== "") && <li>{resume.extraCurricularActivities[2]}</li>}
                {(resume && resume.extraCurricularActivities[0] !== "" && resume.extraCurricularActivities[3] !== "") && <li>{resume.extraCurricularActivities[3]}</li>}
                {(resume && resume.extraCurricularActivities[0] !== "" && resume.extraCurricularActivities[4] !== "") && <li>{resume.extraCurricularActivities[4]}</li>}
                {(resume && resume.extraCurricularActivities[0] !== "" && resume.extraCurricularActivities[5] !== "") && <li>{resume.extraCurricularActivities[5]}</li>}
            </ul>
            <p>{(resume && resume.extraCurricularActivities[6] !== "") && resume.extraCurricularActivities[6]}</p>
            <ul>
                {(resume && resume.extraCurricularActivities[6] !== "" && resume.extraCurricularActivities[7] !== "") && <li>{resume.extraCurricularActivities[7]}</li>}
                {(resume && resume.extraCurricularActivities[6] !== "" && resume.extraCurricularActivities[8] !== "") && <li>{resume.extraCurricularActivities[8]}</li>}
                {(resume && resume.extraCurricularActivities[6] !== "" && resume.extraCurricularActivities[9] !== "") && <li>{resume.extraCurricularActivities[9]}</li>}
                {(resume && resume.extraCurricularActivities[6] !== "" && resume.extraCurricularActivities[10] !== "") && <li>{resume.extraCurricularActivities[10]}</li>}
                {(resume && resume.extraCurricularActivities[6] !== "" && resume.extraCurricularActivities[11] !== "") && <li>{resume.extraCurricularActivities[11]}</li>}
            </ul>
            <p>{(resume && resume.extraCurricularActivities[12] !== "") && resume.extraCurricularActivities[12]}</p>
            <ul>
                {(resume && resume.extraCurricularActivities[12] !== "" && resume.extraCurricularActivities[13] !== "") && <li>{resume.extraCurricularActivities[13]}</li>}
                {(resume && resume.extraCurricularActivities[12] !== "" && resume.extraCurricularActivities[14] !== "") && <li>{resume.extraCurricularActivities[14]}</li>}
                {(resume && resume.extraCurricularActivities[12] !== "" && resume.extraCurricularActivities[15] !== "") && <li>{resume.extraCurricularActivities[15]}</li>}
                {(resume && resume.extraCurricularActivities[12] !== "" && resume.extraCurricularActivities[16] !== "") && <li>{resume.extraCurricularActivities[16]}</li>}
                {(resume && resume.extraCurricularActivities[12] !== "" && resume.extraCurricularActivities[17] !== "") && <li>{resume.extraCurricularActivities[17]}</li>}
            </ul>


            {(resume && (resume.awardsAndAchievements[0] !== "" || resume.awardsAndAchievements[2] !== "" || resume.awardsAndAchievements[4] !== "")) && <br></br>}
            <p><strong>{(resume && (resume.awardsAndAchievements[0] !== "" || resume.awardsAndAchievements[2] !== "" || resume.awardsAndAchievements[4] !== "")) && "Awards and Achievements:"}</strong></p>
            <p>{(resume && resume.awardsAndAchievements[0] !== "") && resume.awardsAndAchievements[0]}</p>
            <ul>
                {(resume && resume.awardsAndAchievements[0] !== "" && resume.awardsAndAchievements[1] !== "") && <li>{resume.awardsAndAchievements[1]}</li>}
            </ul>
            <p>{(resume && resume.awardsAndAchievements[2] !== "") && resume.awardsAndAchievements[2]}</p>
            <ul>
                {(resume && resume.awardsAndAchievements[2] !== "" && resume.awardsAndAchievements[3] !== "") && <li>{resume.awardsAndAchievements[3]}</li>}
            </ul>
            <p>{(resume && resume.awardsAndAchievements[4] !== "") && resume.awardsAndAchievements[4]}</p>
            <ul>
                {(resume && resume.awardsAndAchievements[4] !== "" && resume.awardsAndAchievements[5] !== "") && <li>{resume.awardsAndAchievements[5]}</li>}
            </ul>
        </div>


    // // AWARDS AND ACHIEVEMENTS

    // if (resume.awardsAndAchievements[0] !== "" || resume.awardsAndAchievements[2] !== "" || resume.awardsAndAchievements[4] !== "") {
    //     //add header to div
    // }
    // for (let i = 0; i < resume.extraCurricularActivities.length; i+=2) {
    //     if (resume.extraCurricularActivities[i]) {
    //         //add title to div
    //         if (resume.extraCurricularActivities[i+1] !== "") {
    //             //add descriptions to div
    //         }
    //     }
    // }
    
    return toReturn;
    
}
export default ResumeDetails;
