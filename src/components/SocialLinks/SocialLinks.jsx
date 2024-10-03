import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { nanoid } from "nanoid";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { SiWhatsapp } from "react-icons/si";

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
                   aria-label="Facebook icon">
            <TiSocialFacebook className={styles.icon} />
          </NavLink>
        </li>
        <li key={nanoid()} className={styles.listItem}>
          <NavLink className={buildLinkClass} 
                   to="https://www.instagram.com" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   aria-label="Instagram icon">
            <SlSocialInstagram className={styles.icon} />
          </NavLink>
        </li>
        <li key={nanoid()} className={styles.listItem}>
          <NavLink className={buildLinkClass} 
                   to="tel:+35799674428" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   aria-label="Phone number icon">
            <BsFillTelephoneFill className={styles.icon} />
          </NavLink>
        </li>
        <li key={nanoid()} className={styles.listItem}>
          <NavLink className={buildLinkClass} 
                   to="https://wa.me/35799674428" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   aria-label="WhatsApp icon">
            <SiWhatsapp className={styles.icon} />
          </NavLink>
        </li>      
        <li key={nanoid()} className={styles.listItem}>
          <NavLink className={buildLinkClass} 
                   to="mailto:sotirispelekanos@cytanet.com.cy" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   aria-label="Mail icon">
            <IoIosMail className={styles.icon} />
          </NavLink>
        </li>
      </ul>
    </nav>
)}