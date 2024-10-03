
import { useLocation } from 'react-router-dom';
import homeHero from '../../assets/images/home-hero.jpg';
import apartmentsHero from '../../assets/images/apartments-hero.jpg';
import projectHero from '../../assets/images/project-hero.jpg';
import locationHero from '../../assets/images/location-hero.jpg';
import contactsHero from '../../assets/images/contacts-hero.jpg';
import styles from './Hero.module.css'; 

const heroImages = {
  '/': homeHero,
  '/apartments': apartmentsHero,
  '/project': projectHero,
  '/location': locationHero,
  '/contacts': contactsHero,
};

export const Hero = () => {
  const location = useLocation();
  
  // Визначаємо відповідне зображення на основі поточного шляху
  const currentImage = heroImages[location.pathname] || homeHero;

  return (
    <section className={styles.wrapper} style={{ backgroundImage: `url(${currentImage})` }}>
      <div className={styles.container}>
        <h1>{location.pathname === '/' ? 'Welcome to Our Website' : location.pathname.slice(1).toUpperCase()}</h1>
      </div>
    </section>
  );
};
