import { useState, useMemo, useCallback } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useEffect } from "react";

import styles from "../../styles/components/carousel.module.css";

export default function Carrousel({ start, end, children, time }) {
  let [position, setPosition] = useState(start);

  let [pass, setPass] = useState(true);

  function backward() {
    setPosition(position === start ? end : position - 1);
  }

  function forward() {
    setPosition(position === end ? start : position + 1);
  }

  let [child] = children.filter((i) => {
    if (i.props.id === position) {
      return i;
    }
  });

  useEffect(() => {
    setTimeout(
      () => {
        if (position < end) {
          setPosition(position + 1);
        } else if (position === end) {
          setPosition(start);
        }
      },
      time ? time : 3000
    );
  }, [position]);

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
