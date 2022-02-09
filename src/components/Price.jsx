import styles from "../../styles/components/prices.module.css";

export default function Prices(props) {
  return (
    <div className={styles.modelplan}>
      <h1 className={styles.title}>{props.plan}</h1>

      <h3 className={styles.quantity}>{props.quantity} megas!!!</h3>

      <h3 className={styles.price}>{props.price}</h3>

      <button className={styles.checkbutton}>Conferir</button>
    </div>
  );
}
