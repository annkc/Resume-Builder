import styles from './About.module.css'

/**
 * The about page that gives details about this project.
 * 
 * @returns {div} display of about page
 */
const About = () => {
    return (
        <div className={styles.about}>
            <h2>About Resume Builder</h2>
            <p>By <span className={styles.names}>Anneka Chen</span> and <span className={styles.names}>Tammie Liang</span></p>
            <p>For <span className={styles.bcit}>BCIT's</span> <span className={styles.hackathon}>Hack the Break 2023</span></p>
            <p>Created with MERN</p>
            <p>Started 2023-03-12</p>
        </div>
    )
}

export default About;