import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import { Logo } from '../Logo/Logo'
import { NavBar } from '../NavBar/NavBar'

export const Header =()=>{
    return <header className={styles.wrapper}>
        <Link to="/">
          <Logo />
        </Link>
        <NavBar/>
    </header>
}