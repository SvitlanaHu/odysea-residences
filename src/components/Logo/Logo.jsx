import styles from "./Logo.module.css"

export const Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <h2 className={styles.logo}>
               Ody<span className={styles.logoS}>s</span>ea
            </h2>
            <h2 className={styles.logoTiny}>
               <span className={styles.logoTextR}>R</span>e<span className={styles.logoText}>s</span>idence<span className={styles.logoText}>s</span>
            </h2>
        </div>
    
  );
}
