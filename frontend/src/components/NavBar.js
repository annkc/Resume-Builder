import styles from './NavBar.module.css'

export default function NavBar() {
    return <nav className={styles.nav}>
        <a href="/" className={styles.site_name}>Catch A Job</a>
        <ul>
            <li>
                <a href="/home">Home</a>
                <a href="/create-resume">Create</a>
                <ul><a href="/resumes">Resumes</a></ul>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
}