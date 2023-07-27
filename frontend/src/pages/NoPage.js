import styles from './NoPage.module.css'

/**
 * The 404 error page that displays when the user tries to visit a URL that doesn't lead to 
 * an existing page.
 * 
 * @returns {div} display of 404 page
 */

const NoPage = () => {
    return (
        <div className={styles.noPage}>
            <div className={styles.error_title}><h2>404: Page not found.</h2></div>
            <div className={styles.error_message}>
                <p> We are dishearted to tell you the page you're looking for isn't here with us.</p>
            </div>
            <img src ="/images/404_img.png" alt=""/>
        </div>
    )
}

export default NoPage;