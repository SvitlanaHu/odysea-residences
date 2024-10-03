import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { nanoid } from "nanoid";
import { TiSocialFacebook } from "react-icons/ti";

import styles from "./SocialLinks.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

export const SocialLink = () => { 
    return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        <li key={nanoid()} className={styles.listItem}>
          <NavLink className={buildLinkClass} 
                   to="https://www.facebook.com" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   aria-label="Instagram icon">
            <TiSocialFacebook className={styles.icon} />
          </NavLink>
        </li>
        <li key={nanoid()} className={styles.listItem}>
          <NavLink className={buildLinkClass} 
                   to="https://www.facebook.com" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   aria-label="Instagram icon">
            <TiSocialFacebook className={styles.icon} />
          </NavLink>
        </li>
        <li key={nanoid()} className={styles.listItem}>
          <NavLink className={buildLinkClass} 
                   to="https://www.facebook.com" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   aria-label="Instagram icon">
            <TiSocialFacebook className={styles.icon} />
          </NavLink>
        </li>
        <li key={nanoid()} className={styles.listItem}>
          <NavLink className={buildLinkClass} 
                   to="https://www.facebook.com" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   aria-label="Instagram icon">
            <TiSocialFacebook className={styles.icon} />
          </NavLink>
        </li>      
        <li key={nanoid()} className={styles.listItem}>
          <NavLink className={buildLinkClass} 
                   to="https://www.facebook.com" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   aria-label="Instagram icon">
            <TiSocialFacebook className={styles.icon} />
          </NavLink>
        </li>
      </ul>
    </nav>
)}