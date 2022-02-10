import { ImFacebook2, ImInstagram, ImTwitter } from "react-icons/im";

import styles from "../../styles/components/footer.module.css";

export default function MainFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialmedia}>
        <span className={styles.follow}>Nos siga nas redes sociais: </span>
        <div className={styles.socialicon}>
          <ImFacebook2 className={styles.facebook} />
        </div>
        <div className={styles.socialicon}>
          <ImInstagram className={styles.instagram} />
        </div>
        <div className={styles.socialicon}>
          <ImTwitter className={styles.twitter} />
        </div>
      </div>

      <div className={styles.copyright}>
        Desenvolvido por Fabricio B. &copy; 2022
      </div>
    </footer>
  );
}
