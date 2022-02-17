import Head from "next/head";
import MainHeader from "./Header";
import styles from "../../styles/components/layout.module.css";
import MainFooter from "./Footer";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>

      <MainHeader />

      <main className={styles.children}>{props.children}</main>

      <MainFooter />
    </>
  );
}
