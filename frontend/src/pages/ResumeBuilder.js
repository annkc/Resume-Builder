import Form from '../components/Form'

import styles from './ResumeBuilder.module.css'

const ResumeBuilder = () => {
    return (
        <div className={styles.resumeBuilder}>
            <h2>Create Your Resume</h2>
            <Form/>
        </div>
    )
}

export default ResumeBuilder;