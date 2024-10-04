import styles from "./SectionAbout.module.css";
import aboutImage from '../../assets/images/home-about.jpg';

export const SectionAbout =()=> {
    return (<section className={styles.wrapper}>
      <div className={styles.container}>
            <img className={styles.img} src={aboutImage} alt="House - right side" />
            <div className={styles.about}>
                <h2 className={styles.title}>Modern living  experience</h2>
                <p className={styles.text}>Designed by the award winning Architectural firm r. G. Patsalosavvis Architecture & Design L.L.C., Odysea residences incorporates all aspects of Mediterranean living and bioclimatic design with contemporary architecture and timeless materials. Perfect detailing, the finest fittings, and immaculate finishing will make you proud to be the owner of a home in this superb building.</p>
            </div>
      </div>        
    </section>
)}