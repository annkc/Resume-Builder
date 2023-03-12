export default function NavBar() {
    return <nav className="nav">
        <a href="/" className="site-name">Catch A Job</a>
        <ul>
            <li>
                <a href="/home">Home</a>
                <a href="/create-resume">Create</a>
                <a href="/resumes">Resumes</a>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
}
