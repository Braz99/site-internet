import Head from "next/head";
import Layout from "../components/Layout";
import Prices from "../components/Price";
import styles from "../../styles/home.module.css";
import Testimonial from "../components/Testimonial";

import { useEffect, useState } from "react";
import Carrousel from "../components/Carousel";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout title="Home">
        <div className={styles.call}>
          Venha para a melhor internet da região!
        </div>
        <div className={styles.sales}>
          {" "}
          <span className={styles.titleSales}>Ofertas arrasadoras!!!!</span>
        </div>

        <section className={styles.pricessection}>
          <Prices plan="Básico" price="R$ 100,00" level={0} quantity={100} />
          <Prices plan="Médio" price="R$120,00" level={1} quantity={200} />
          <Prices plan="Premium" price="R$200,00" level={2} quantity={300} />
        </section>

        <section className={styles.testimonialssection}>
          <Carrousel>
            <Testimonial name="Joaquim Manuel" id={1}>
              Uso a telenet há mais de dois anos, e dentre as que já usei, ela é
              a melhor!
            </Testimonial>

            <Testimonial name="Lúcia Almeida" id={2}>
              Além da internet de qualidade, o atendimento não deixa a desejar.
              Ótimos funcionários!
            </Testimonial>

            <Testimonial name="Pedro Guimarães" id={3}>
              Resolvem problemas com a internet rapidamente, prestando um
              excelente serviço!
            </Testimonial>

            <Testimonial name="Rebeca Silva" id={4}>
              Já sou uma cliente fiel da Telenet, e já recomendei para várias
              pessoas. A melhor de todas!
            </Testimonial>
          </Carrousel>
        </section>
      </Layout>
    </>
  );
}