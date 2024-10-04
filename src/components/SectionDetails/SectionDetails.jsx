import styles from "./SectionDetails.module.css";
import detailsImage from '../../assets/images/home-details.jpg';
import detailsImage1 from '../../assets/images/home-details-img1.jpg';
import detailsImage2 from '../../assets/images/home-details-img2.jpg';
import detailsImage3 from '../../assets/images/home-details-img3.jpg';

export const SectionDetails =()=> {
    return (<section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.description}>
          <div className={styles.about}>
                <h2 className={styles.title}>Distinctive residences with instant appeal</h2>
                <p className={styles.text}>This distinctive apartment project is conveniently situated in the heart of the highly desirable neighborhood in Germasogia. Surrounded by public green areas, walkways and low density buildings, and a walking distance of just 600m from the Dasoudi sea front Park. It presents deluxe living environments that demonstrate great value for such an upmarket location. Comprising a total of 13 cleverly designed 2 and 3 bedrooms apartments with a fabulous penthouse on the top floor,  a basement area with a private gym, changing rooms, steam bath facilities and a citrus grove with a swimming pool on the ground floor.</p>
            </div>
            <img className={styles.img} src={detailsImage} alt="House - back side" />
        </div> 
        <ul className={styles.list}>
          <li className={styles.item1}><img className={styles.image1} src={detailsImage1} alt="House - back side" /></li>
          <li className={styles.item1}><img className={styles.images} src={detailsImage2} alt="House - back side" /></li>
          <li className={styles.item3}><img className={styles.images} src={detailsImage3} alt="House - back side" /></li>
          <li className={styles.item4}>
            <p className={styles.text}>Careful consideration has been given to the expectations of todays home owner - Ensuring maximum privacy from the outside and simultaneously enjoying unobstructed views to the exterior, cross ventilation and luminosity all year round. Crafted with the finest materials and designed to keep comfort and functionality to the fore, Odysea Residences encourages a more casual way of living that affords the opportunities to fully enjoy Limassol at its best. </p>
          </li>
        </ul>
      </div>        
    </section>
)}