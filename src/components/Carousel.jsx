import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Pagination from "./Pagination";

import styles from "../../styles/components/carousel.module.css";

export default function Carrousel({ start, end, children }) {
  let [position, setPosition] = useState(start);

  function backward() {
    setPosition(position === start ? end : position - 1);
  }

  function forward() {
    setPosition(position === end ? start : position + 1);
  }

  // let [pass, setPass] = useState(true);
  // useEffect(() => {
  //   setTimeout(
  //     () => {
  //       if (position < end) {
  //         setPosition(position + 1);
  //       } else if (position === end) {
  //         setPosition(start);
  //       }
  //     },
  //     time ? time : 3000
  //   );
  // }, [position]);

  return (
    <div className={styles.carouselclass}>
      <span className={styles.arrowbackward} onClick={backward}>
        <MdArrowBackIosNew />
      </span>
      <div className={styles.child}>
        {children.map((child) => (child.props.id === position ? child : false))}
      </div>
      <span className={styles.arrowforward} onClick={forward}>
        <MdArrowForwardIos />
      </span>

      <Pagination number={end} data={[position, setPosition]} />
    </div>
  );
}
