import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

import styles from "./NavBar.module.css";
import { selectFavoritesIDs } from "../../redux/selectors";

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

export const NavBar = () => {
  const favoriteTipRef = useRef(null);
  const favoriteCount = useSelector(selectFavoritesIDs);

  useEffect(() => {
    if (favoriteTipRef.current) {
      favoriteTipRef.current.setAttribute(
        "data-favorite-count",
        favoriteCount.length ? `+${favoriteCount.length}` : ''
      );
    }
  }, [favoriteCount]);

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        <li key={nanoid()} className={styles.listItem}>
          <NavLink className={buildLinkClass} to="/">
            <span>Home</span>
          </NavLink>
        </li>
        <li key={nanoid()} className={styles.listItem}>
          <NavLink className={buildLinkClass} to="/apartments">
            <span>Apartments</span>
          </NavLink>
        </li>
        <li key={nanoid()} className={styles.listItem}>
          <NavLink className={buildLinkClass} to="/project">
            <span>The Project</span>
          </NavLink>
        </li>
        <li key={nanoid()} className={styles.listItem}>
          <NavLink className={buildLinkClass} to="/location">
            <span>Location</span>
          </NavLink>
        </li>      
        <li key={nanoid()} className={styles.listItem}>
          <NavLink className={buildLinkClass} to="/contacts">
            <span>Contacts</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
