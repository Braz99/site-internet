import styles from "../../styles/components/testimonial.module.css";

export default function Testimonial({ children, name, photo }) {
  return (
    <section className={styles.testimonial}>
      <img
        className={styles.photo}
        alt="foto-cliente"
        src={photo ? photo : "favicon.ico"}
      />

      <div className={styles.group}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.text}>{children}</p>
      </div>
    </section>
  );
}
