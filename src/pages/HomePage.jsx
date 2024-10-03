import { Hero } from '../components/Hero/Hero';
import styles from './Pages.module.css';


export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Hero/>
    </div>
    
  );
};
