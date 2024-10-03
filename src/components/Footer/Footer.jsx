import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { Logo } from '../Logo/Logo';
import { SocialLink } from "../SocialLinks/SocialLinks";

export const Footer =()=>{
    return <footer className={styles.wrapper}>
        <Link to="/">
          <Logo />
        </Link>
        <SocialLink/>
    </footer>
}