import Footer from "../../components/Footer/Footer"
import styles from "./404.module.scss"
import Button from "../../components/Button/Button"
import { Link } from "react-router-dom"
const Error404Page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.errTitle}>Error 404</div>
                <Link to="/">
                    <Button text="go back" />
                </Link>
            </div>
            <Footer/>
        </div>
    )
}
export default Error404Page