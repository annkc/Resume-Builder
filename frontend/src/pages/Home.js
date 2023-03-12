import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.main_title}>
                <h1>Resume Builder</h1>
            </div>
            <div className={styles.buttons}>
                <button>Get Started</button>
                <button>View Resumes</button>
            </div>
        </div>
    )
}

export default Home;