import styles from './styles.module.css'

export default function SubmitButton ({text, type}) {
    return (
        <button className={styles.button} type={type}>{text}</button>
    )
}