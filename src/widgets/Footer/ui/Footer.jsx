import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>©{new Date().getFullYear()} Ana Emanuela</p>
        </footer>
    )
}

export default Footer
