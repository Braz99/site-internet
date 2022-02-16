import { useState, useEffect } from "react";
import styles from "../../styles/components/carousel.module.css";

export default function Pagination({ number, data }) {
  let quantity = [];
  let [position, setPosition] = data;

  let [current, setCurrent] = useState();

  for (let index = 1; index <= number; index++) {
    quantity.push(index);
  }

  useEffect(() => setCurrent(position), [position]);

  return (
    <div className={styles.pagination}>
      {quantity.map((item) => (
        <div
          className={`${styles.point} ${
            current === item ? styles.clicked : styles.none
          }`}
          key={item}
          onClick={() => setPosition(item)}
        ></div>
      ))}
    </div>
  );
}
