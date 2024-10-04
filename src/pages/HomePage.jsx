import { Hero } from '../components/Hero/Hero';
import { SectionAbout } from "../components/SectionAbout/SectionAbout";
import styles from './Pages.module.css';


export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Hero />
      <SectionAbout />  
    </div>
    
  );
};
