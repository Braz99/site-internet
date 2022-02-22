import Head from "next/head";
import MainHeader from "./Header";
import styles from "../../styles/components/layout.module.css";
import MainFooter from "./Footer";
import { useState } from "react";

export default function Layout(props) {
  let [mobile, setMobile] = useState();

  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>

      <MainHeader change={() => setMobile(!mobile)} />

      {mobile ? (
        false
      ) : (
        <>
          <main className={styles.children}>{props.children}</main>
          <MainFooter />
        </>
      )}
    </>
  );
}
