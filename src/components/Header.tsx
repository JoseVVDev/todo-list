import styles from './Header.module.css'

import logoRocket from '../assets/rocket.svg' 

export function Header() {
    return (
        <div className={styles.headerTodo}>
            <img src={logoRocket} alt="" />
            <h1>
                to<span>do</span>
            </h1>
        </div>
    )
}