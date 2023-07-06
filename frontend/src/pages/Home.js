import {Link} from 'react-router-dom';
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.home}>
            <body>
            <div className={styles.main_title}>
                <h1>Resume Builder</h1>
            </div>
            <div className={styles.buttons}>
                <Link to="/create-resume">
                    <button>Get Started</button>
                </Link>
                <Link to="/resumes">
                    <button>View Resumes</button>
                </Link>
            </div>
            </body>
        </div>
    )
}

export default Home;