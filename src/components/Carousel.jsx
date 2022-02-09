import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import styles from "../../styles/components/carousel.module.css";

export default function Carrousel(props) {
  let [position, setPosition] = useState(1);

  function backward() {
    setPosition(position === 0 ? 4 : position - 1);
  }

  function forward() {
    setPosition(position === 4 ? 1 : position + 1);
  }

  let child = "";

  props.children.forEach((i) => {
    if (i.props.id === position) {
      child = i;
    }
  });

  return (
    <div className={styles.carouselclass}>
      <span className={styles.arrowbackward} onClick={backward}>
        <MdArrowBackIosNew />
      </span>
      <div className={styles.child}>{child}</div>
      <span className={styles.arrowforward} onClick={forward}>
        <MdArrowForwardIos />
      </span>
    </div>
  );
}
