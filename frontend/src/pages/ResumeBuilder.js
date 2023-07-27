import Form from '../components/Form'

import styles from './ResumeBuilder.module.css'

/**
 * The resume creation page with a form for user input.
 * 
 * @returns {div} display of resume creation page
 */
const ResumeBuilder = () => {
    return (
        <div className={styles.resumeBuilder}>
            <h2>Create Your Resume</h2>
            <Form/>
        </div>
    )
}

export default ResumeBuilder;