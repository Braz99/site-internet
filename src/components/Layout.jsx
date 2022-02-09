import Head from "next/head";
import MainHeader from "./Header";
import styles from "../../styles/components/layout.module.css";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>

      <MainHeader />

      <div className={styles.children}>{props.children}</div>
    </>
  );
}
