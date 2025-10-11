import styles from "./Header/Header.module.css"

export const Header = () => {
    return (
        <div className={styles.header} >
            <ul className={styles.nav}>
                <li>Home</li>
                <li>About</li>
            </ul>
        </div>
    )
}
