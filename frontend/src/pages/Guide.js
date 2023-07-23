import styles from './Guide.module.css'
import { Link } from "react-router-dom";

const Guide = () => {
    return (
        <div className={styles.guide}>
            <h2>How to use the Resume Builder</h2>
            <h3><br></br>Creating a Resume</h3>
            <p>Simply fill out the blanks in the form given. The first few required fields 
                are marked as such, and the rest can are optional and you are free to fill them in 
                or not.</p>
            {/* picture of some stuff filled out */}
            <div>
                <span><img src ="/images/creation_example_1.png" alt=""/></span>
                <span><img src ="/images/creation_example_2.png" alt=""/></span>
            </div>

            <p>However, please make sure every list item has a title. For example:</p>
            {/* picture of what is acceptable and what is not */}
            <div>
                <span><img src ="/images/creation_example_incorrect.png" alt=""/></span>
                <span><img src ="/images/creation_example_correct.png" alt=""/></span>
            </div>

            <h3><br></br>How to Print a Resume</h3>
            <p>You've created your resume and have found it from the list. Now what?</p>
            <p>When you're viewing a resume, the button at the bottom of the page opens a new tab
                where the inputs you provided are formatted as they would be in a proper resume.
                You can print this out via your browser. <Link to={'/resume-print/sample'} target='_blank'>Here's an example.</Link></p>
            <p>To find the option to print in your browser, use the shortcut Ctrl + P, or 
                ⌘ Command + P for iOS, which may bring it up in your browser. If not, it can be 
                found in your browser's settings.</p>
            <p>Before clicking the print button, select the printer option that would save/print as 
                a PDF, and for the other options, be sure to not include the background graphics or 
                the header/footers. Feel free to also adjust the margins to your preferences.</p>

            <h3><br></br>Now you're all set!</h3>
        </div>
    )
}

export default Guide;