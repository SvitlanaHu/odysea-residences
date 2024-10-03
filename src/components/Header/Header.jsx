import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import { Logo } from '../Logo/Logo'
import { NavBar } from '../NavBar/NavBar'

export const Header =()=>{
    return <header className={styles.wrapper}>
      <div className={styles.container}>
        <Link className={styles.logo} to="/"><Logo /></Link>
        <NavBar />
      </div>        
    </header>
}