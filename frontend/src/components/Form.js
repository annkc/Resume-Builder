import styles from './Form.module.css'
import { useState } from "react";

export default function Form() {
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [education, setEducation] = useState('');
    const [objective_1, setObjective_1] = useState('');
    const [objective_2, setObjective_2] = useState('');
    const [workExperience_1, setWorkExperience_1] = useState('');
    const [workExperience_1a, setWorkExperience_1a] = useState('');
    const [workExperience_1b, setWorkExperience_1b] = useState('');
    const [workExperience_1c, setWorkExperience_1c] = useState('');
    const [workExperience_1d, setWorkExperience_1d] = useState('');
    const [workExperience_1e, setWorkExperience_1e] = useState('');
    const [workExperience_2, setWorkExperience_2] = useState('');
    const [workExperience_2a, setWorkExperience_2a] = useState('');
    const [workExperience_2b, setWorkExperience_2b] = useState('');
    const [workExperience_2c, setWorkExperience_2c] = useState('');
    const [workExperience_2d, setWorkExperience_2d] = useState('');
    const [workExperience_2e, setWorkExperience_2e] = useState('');
    const [workExperience_3, setWorkExperience_3] = useState('');
    const [workExperience_3a, setWorkExperience_3a] = useState('');
    const [workExperience_3b, setWorkExperience_3b] = useState('');
    const [workExperience_3c, setWorkExperience_3c] = useState('');
    const [workExperience_3d, setWorkExperience_3d] = useState('');
    const [workExperience_3e, setWorkExperience_3e] = useState('');
    const [project_1, setProject_1] = useState('');
    const [project_1a, setProject_1a] = useState('');
    const [project_1b, setProject_1b] = useState('');
    const [project_1c, setProject_1c] = useState('');
    const [project_1d, setProject_1d] = useState('');
    const [project_1e, setProject_1e] = useState('');
    const [project_2, setProject_2] = useState('');
    const [project_2a, setProject_2a] = useState('');
    const [project_2b, setProject_2b] = useState('');
    const [project_2c, setProject_2c] = useState('');
    const [project_2d, setProject_2d] = useState('');
    const [project_2e, setProject_2e] = useState('');
    const [project_3, setProject_3] = useState('');
    const [project_3a, setProject_3a] = useState('');
    const [project_3b, setProject_3b] = useState('');
    const [project_3c, setProject_3c] = useState('');
    const [project_3d, setProject_3d] = useState('');
    const [project_3e, setProject_3e] = useState('');
    const [extraCurricularActivity_1, setExtraCurricularActivity_1] = useState('');
    const [extraCurricularActivity_1a, setExtraCurricularActivity_1a] = useState('');
    const [extraCurricularActivity_1b, setExtraCurricularActivity_1b] = useState('');
    const [extraCurricularActivity_1c, setExtraCurricularActivity_1c] = useState('');
    const [extraCurricularActivity_1d, setExtraCurricularActivity_1d] = useState('');
    const [extraCurricularActivity_1e, setExtraCurricularActivity_1e] = useState('');
    const [extraCurricularActivity_2, setExtraCurricularActivity_2] = useState('');
    const [extraCurricularActivity_2a, setExtraCurricularActivity_2a] = useState('');
    const [extraCurricularActivity_2b, setExtraCurricularActivity_2b] = useState('');
    const [extraCurricularActivity_2c, setExtraCurricularActivity_2c] = useState('');
    const [extraCurricularActivity_2d, setExtraCurricularActivity_2d] = useState('');
    const [extraCurricularActivity_2e, setExtraCurricularActivity_2e] = useState('');
    const [extraCurricularActivity_3, setExtraCurricularActivity_3] = useState('');
    const [extraCurricularActivity_3a, setExtraCurricularActivity_3a] = useState('');
    const [extraCurricularActivity_3b, setExtraCurricularActivity_3b] = useState('');
    const [extraCurricularActivity_3c, setExtraCurricularActivity_3c] = useState('');
    const [extraCurricularActivity_3d, setExtraCurricularActivity_3d] = useState('');
    const [extraCurricularActivity_3e, setExtraCurricularActivity_3e] = useState('');
    const [awardsAndAchievements_1, setAwardsAndAchievements_1] = useState('');
    const [awardsAndAchievements_1a, setAwardsAndAchievements_1a] = useState('');
    const [awardsAndAchievements_2, setAwardsAndAchievements_2] = useState('');
    const [awardsAndAchievements_2a, setAwardsAndAchievements_2a] = useState('');
    const [awardsAndAchievements_3, setAwardsAndAchievements_3] = useState('');
    const [awardsAndAchievements_3a, setAwardsAndAchievements_3a] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const objectives = Array(objective_1, objective_2);
        const workExperience = Array(workExperience_1, workExperience_1a, workExperience_1b, workExperience_1c, workExperience_1d, workExperience_1e,
            workExperience_2, workExperience_2a, workExperience_2b, workExperience_2c, workExperience_2d, workExperience_2e,
            workExperience_3, workExperience_3a, workExperience_3b, workExperience_3c, workExperience_3d, workExperience_3e);
        const projects = Array(project_1, project_1a, project_1b, project_1c, project_1d, project_1e,
            project_2, project_2a, project_2b, project_2c, project_2d, project_2e,
            project_3, project_3a, project_3b, project_3c, project_3d, project_3e);
        const extraCurricularActivities = Array(extraCurricularActivity_1, extraCurricularActivity_1a, extraCurricularActivity_1b, extraCurricularActivity_1c, extraCurricularActivity_1d, extraCurricularActivity_1e,
            extraCurricularActivity_2, extraCurricularActivity_2a, extraCurricularActivity_2b, extraCurricularActivity_2c, extraCurricularActivity_2d, extraCurricularActivity_2e,
            extraCurricularActivity_3, extraCurricularActivity_3a, extraCurricularActivity_3b, extraCurricularActivity_3c, extraCurricularActivity_3d, extraCurricularActivity_3e);
        const awardsAndAchievements = Array(awardsAndAchievements_1, awardsAndAchievements_1a, awardsAndAchievements_2, awardsAndAchievements_2a, awardsAndAchievements_3, awardsAndAchievements_3a);
        const resume = { title, name, phoneNumber, email, website, education, objectives, workExperience, projects, extraCurricularActivities, awardsAndAchievements }
        console.log(resume);
        console.log(JSON.stringify(resume));
        
        const fetchResponse = await fetch('/api/resumes', {
            method: 'POST',
            header: { "Content-Type": "application/json" },
            body: JSON.stringify(resume)
        }).then(() => {
            console.log('new resume added');
        })
        
        
    }

    return <div className={styles.form}>
        <h3>Let's build a resume!</h3>
        <form onSubmit={handleSubmit}>
            <label>Resume title:</label>
            <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>Name:</label>
            <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label>Phone number:</label>
            <input
                type="text"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <label>Email:</label>
            <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label>Website Link:</label>
            <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
            />
            <label>Education:</label>
            <input
                type="text"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
            />
            <h4>Objectives:</h4>
            <label>Objective 1:</label>
            <input
                type="text"
                value={objective_1}
                onChange={(e) => setObjective_1(e.target.value)}
            />
            <label>Objective 2:</label>
            <input
                type="text"
                value={objective_2}
                onChange={(e) => setObjective_2(e.target.value)}
            />
            <h4>Work Experience:</h4>
            <label>Work Experience 1:</label>
            <input
                type="text"
                value={workExperience_1}
                onChange={(e) => setWorkExperience_1(e.target.value)}
            />
            <textarea
                value={workExperience_1a}
                onChange={(e) => setWorkExperience_1a(e.target.value)}
            ></textarea>
            <textarea
                value={workExperience_1b}
                onChange={(e) => setWorkExperience_1b(e.target.value)}
            ></textarea>
            <textarea
                value={workExperience_1c}
                onChange={(e) => setWorkExperience_1c(e.target.value)}
            ></textarea>
            <textarea
                value={workExperience_1d}
                onChange={(e) => setWorkExperience_1d(e.target.value)}
            ></textarea>
            <textarea
                value={workExperience_1e}
                onChange={(e) => setWorkExperience_1e(e.target.value)}
            ></textarea>
            <label>Work Experience 2:</label>
            <input
                type="text"
                value={workExperience_2}
                onChange={(e) => setWorkExperience_2(e.target.value)}
            />
            <textarea
                value={workExperience_2a}
                onChange={(e) => setWorkExperience_2a(e.target.value)}
            ></textarea>
            <textarea
                value={workExperience_2b}
                onChange={(e) => setWorkExperience_2b(e.target.value)}
            ></textarea>
            <textarea
                value={workExperience_2c}
                onChange={(e) => setWorkExperience_2c(e.target.value)}
            ></textarea>
            <textarea
                value={workExperience_2d}
                onChange={(e) => setWorkExperience_2d(e.target.value)}
            ></textarea>
            <textarea
                value={workExperience_2e}
                onChange={(e) => setWorkExperience_2e(e.target.value)}
            ></textarea>
            <label>Work Experience 3:</label>
            <input
                type="text"
                value={workExperience_3}
                onChange={(e) => setWorkExperience_3(e.target.value)}
            />
            <textarea
                value={workExperience_3a}
                onChange={(e) => setWorkExperience_3a(e.target.value)}
            ></textarea>
            <textarea
                value={workExperience_3b}
                onChange={(e) => setWorkExperience_3b(e.target.value)}
            ></textarea>
            <textarea
                value={workExperience_3c}
                onChange={(e) => setWorkExperience_3c(e.target.value)}
            ></textarea>
            <textarea
                value={workExperience_3d}
                onChange={(e) => setWorkExperience_3d(e.target.value)}
            ></textarea>
            <textarea
                value={workExperience_3e}
                onChange={(e) => setWorkExperience_3e(e.target.value)}
            ></textarea>
            <h4>Projects:</h4>
            <label>Project 1:</label>
            <input
                type="text"
                value={project_1}
                onChange={(e) => setProject_1(e.target.value)}
            />
            <textarea
                value={project_1a}
                onChange={(e) => setProject_1a(e.target.value)}
            ></textarea>
            <textarea
                value={project_1b}
                onChange={(e) => setProject_1b(e.target.value)}
            ></textarea>
            <textarea
                value={project_1c}
                onChange={(e) => setProject_1c(e.target.value)}
            ></textarea>
            <textarea
                value={project_1d}
                onChange={(e) => setProject_1d(e.target.value)}
            ></textarea>
            <textarea
                value={project_1e}
                onChange={(e) => setProject_1e(e.target.value)}
            ></textarea>
            <label>Project 2:</label>
            <input
                type="text"
                value={project_2}
                onChange={(e) => setProject_2(e.target.value)}
            />
            <textarea
                value={project_2a}
                onChange={(e) => setProject_2a(e.target.value)}
            ></textarea>
            <textarea
                value={project_2b}
                onChange={(e) => setProject_2b(e.target.value)}
            ></textarea>
            <textarea
                value={project_2c}
                onChange={(e) => setProject_2c(e.target.value)}
            ></textarea>
            <textarea
                value={project_2d}
                onChange={(e) => setProject_2d(e.target.value)}
            ></textarea>
            <textarea
                value={project_2e}
                onChange={(e) => setProject_2e(e.target.value)}
            ></textarea>
            <label>Project 3:</label>
            <input
                type="text"
                value={project_3}
                onChange={(e) => setProject_3(e.target.value)}
            />
            <textarea
                value={project_3a}
                onChange={(e) => setProject_3a(e.target.value)}
            ></textarea>
            <textarea
                value={project_3b}
                onChange={(e) => setProject_3b(e.target.value)}
            ></textarea>
            <textarea
                value={project_3c}
                onChange={(e) => setProject_3c(e.target.value)}
            ></textarea>
            <textarea
                value={project_3d}
                onChange={(e) => setProject_3d(e.target.value)}
            ></textarea>
            <textarea
                value={project_3e}
                onChange={(e) => setProject_3e(e.target.value)}
            ></textarea>
            <h4>Extracurricular Activities:</h4>
            <label>Activity 1:</label>
            <input
                type="text"
                value={extraCurricularActivity_1}
                onChange={(e) => setExtraCurricularActivity_1(e.target.value)}
            />
            <textarea
                value={extraCurricularActivity_1a}
                onChange={(e) => setExtraCurricularActivity_1a(e.target.value)}
            ></textarea>
            <textarea
                value={extraCurricularActivity_1b}
                onChange={(e) => setExtraCurricularActivity_1b(e.target.value)}
            ></textarea>
            <textarea
                value={extraCurricularActivity_1c}
                onChange={(e) => setExtraCurricularActivity_1c(e.target.value)}
            ></textarea>
            <textarea
                value={extraCurricularActivity_1d}
                onChange={(e) => setExtraCurricularActivity_1d(e.target.value)}
            ></textarea>
            <textarea
                value={extraCurricularActivity_1e}
                onChange={(e) => setExtraCurricularActivity_1e(e.target.value)}
            ></textarea>
            <label>Activity 2:</label>
            <input
                type="text"
                value={extraCurricularActivity_2}
                onChange={(e) => setExtraCurricularActivity_2(e.target.value)}
            />
            <textarea
                value={extraCurricularActivity_2a}
                onChange={(e) => setExtraCurricularActivity_2a(e.target.value)}
            ></textarea>
            <textarea
                value={extraCurricularActivity_2b}
                onChange={(e) => setExtraCurricularActivity_2b(e.target.value)}
            ></textarea>
            <textarea
                value={extraCurricularActivity_2c}
                onChange={(e) => setExtraCurricularActivity_2c(e.target.value)}
            ></textarea>
            <textarea
                value={extraCurricularActivity_2d}
                onChange={(e) => setExtraCurricularActivity_2d(e.target.value)}
            ></textarea>
            <textarea
                value={extraCurricularActivity_2e}
                onChange={(e) => setExtraCurricularActivity_2e(e.target.value)}
            ></textarea>
            <label>Activity 3:</label>
            <input
                type="text"
                value={extraCurricularActivity_3}
                onChange={(e) => setExtraCurricularActivity_3(e.target.value)}
            />
            <textarea
                value={extraCurricularActivity_3a}
                onChange={(e) => setExtraCurricularActivity_3a(e.target.value)}
            ></textarea>
            <textarea
                value={extraCurricularActivity_3b}
                onChange={(e) => setExtraCurricularActivity_3b(e.target.value)}
            ></textarea>
            <textarea
                value={extraCurricularActivity_3c}
                onChange={(e) => setExtraCurricularActivity_3c(e.target.value)}
            ></textarea>
            <textarea
                value={extraCurricularActivity_3d}
                onChange={(e) => setExtraCurricularActivity_3d(e.target.value)}
            ></textarea>
            <textarea
                value={extraCurricularActivity_3e}
                onChange={(e) => setExtraCurricularActivity_3e(e.target.value)}
            ></textarea>
            <h4>Awards and Achievements:</h4>
            <label>Awards/Achievement 1:</label>
            <input
                type="text"
                value={awardsAndAchievements_1}
                onChange={(e) => setAwardsAndAchievements_1(e.target.value)}
            />
            <textarea
                value={awardsAndAchievements_1a}
                onChange={(e) => setAwardsAndAchievements_1a(e.target.value)}
            ></textarea>
            <label>Awards/Achievement 2:</label>
            <input
                type="text"
                value={awardsAndAchievements_2}
                onChange={(e) => setAwardsAndAchievements_2(e.target.value)}
            />
            <textarea
                value={awardsAndAchievements_2a}
                onChange={(e) => setAwardsAndAchievements_2a(e.target.value)}
            ></textarea>
            <label>Awards/Achievement 3:</label>
            <input
                type="text"
                value={awardsAndAchievements_3}
                onChange={(e) => setAwardsAndAchievements_3(e.target.value)}
            />
            <textarea
                value={awardsAndAchievements_3a}
                onChange={(e) => setAwardsAndAchievements_3a(e.target.value)}
            ></textarea>
            <h4>Click to finish!</h4>
            <button>Create Resume</button>
        </form>
    </div>
}


