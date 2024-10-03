import styles from './Header.module.css';
import { Logo } from '../Logo/Logo';

export const Footer =()=>{
    return <footer className={styles.wrapper}>
        <Logo/>
    </footer>
}