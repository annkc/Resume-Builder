import styles from '../components/ResumePrint.module.css'

/**
 * Page that displays a sample resume, formatted to be saved as a PDF.
 * 
 * @returns {div} sample resume page
 */
const Sample = () => {
    return (
        <div className={styles.resume_print}>
            <h1>Ryan Chan</h1>
            <hr></hr>
            <div className={styles.contact_info}>
                <span>(777) 999-2660</span> 
                <span>rchan@catchajob.com</span>
            </div>
    
            <div>
                <h3><br></br>Education</h3> 
                <p>University of CB</p>
            </div>


            <div><h3><br></br>Work Experience</h3>
            <p>Librarian, Public Library</p>
            <ul>
                <li>Shelved books by section/genre and alphabetical order</li>
                <li>Checked books in and out of the system</li>
                <li>Create accounts and provided new cards to first time library-goers</li>
                <li>Gave recommendations based on requests</li>
                <li>Hosted community events every month</li>
            </ul>
            <p>Barista, Duck Cafe</p>
            <ul>
                <li>Took orders in a clear and friendly manner</li>
                <li>Managed multiple orders at once</li>
                <li>Prepared a variety of dishes in a timely manner</li>
            </ul>
            </div>   


            <div><h3><br></br>Projects</h3>
            <p>Anime Filter</p>
            <ul>
                <li>A filter that can alter a person's appearance in a photograph</li>
                <li>Transforms user's appearance into an anime aesthetic</li>
                <li>Uses tracking to accordingly transform only the user's face</li>
            </ul>
            </div>   


            <div><h3><br></br>Extracurricular Activities</h3>
            <p>Anime Filter</p>
            <ul>
                <li>Brainstorming new events to host</li>
                <li>Promoting the club and its events on social media</li>
                <li>Reaching out to new members as well as being available for existing members</li>
            </ul>
            </div>  

            <div><h3><br></br>Awards and Achievements</h3>
            <p>Scholarship</p>
            <ul>
                <li>Awarded to students with high academic standing</li>
            </ul>
            </div>  

        </div>


    )
}

export default Sample;