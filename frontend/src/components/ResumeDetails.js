import styles from './ResumeDetails.module.css'
const ResumeDetails = ({resume}) => {
    return (
        <div className={styles.resume_details}>
            <h4>{resume.title}</h4>
            <p>{resume.createdAt}</p>
        </div>
    )
}

export default ResumeDetails;