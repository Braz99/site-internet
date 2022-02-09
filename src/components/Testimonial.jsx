import styles from "../../styles/components/testimonial.module.css";

export default function Testimonial({ children, name, photo }) {
  return (
    <section className={styles.testimonial}>
      <div className={styles.photo}>{photo ? photo : "Foto"}</div>
      <div className={styles.group}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.text}>{children}</p>
      </div>
    </section>
  );
}
