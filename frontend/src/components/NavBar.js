import {Link} from 'react-router-dom';
import styles from './NavBar.module.css'

export default function NavBar() {
    return (
    <div className={styles.nav_container}>
        <img src ="/images/Catch_a_job_logo_orange.png" alt=""/>
        <div className={styles.site_title}>
            <Link to="/">
                <h1>Catch-A-Job</h1>
            </Link>
        </div>
        <div className={styles.links}>
        <li>
            <ul><a href="/home">Home</a></ul>
            <ul><a href="/create-resume">Create</a></ul>
            <ul><a href="/resumes">Resumes</a></ul>
            <ul><a href="/about">About</a></ul>
        </li>
        </div>
    </div>
    )
}