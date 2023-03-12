import styles from './ResumeSnippet.module.css'
const ResumeSnippet = ({resume}) => {
    return (
        <div className={styles.resume_details}>
            <h4>{resume.title}</h4>
            <p>Created at: {resume.createdAt}</p>
        </div>
    )
}

export default ResumeSnippet;