import styles from "./Button.module.scss";

const Button = ({text, onClick}) => {
    return <button onClick={onClick} className={styles.btnItem}>{text}</button>
}

export default Button