import Head from "next/head";
import Layout from "../components/Layout";
import Prices from "../components/Price";
import styles from "../../styles/home.module.css";
import Testimonial from "../components/Testimonial";

import Carrousel from "../components/Carousel";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Site de um provedor de internet" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout title="Home">
        <div className={styles.call}>
          Venha para a melhor internet da região!
        </div>
        <div className={styles.sales}>
          <span className={styles.titleSales}>Ofertas arrasadoras!!!!</span>
        </div>

        <section className={styles.pricessection}>
          <Prices
            plan="Básico"
            price="R$ 100,00"
            quantity={100}
            link={"/contact"}
          />
          <Prices
            plan="Médio"
            price="R$120,00"
            quantity={200}
            link={"/contact"}
          />
          <Prices
            plan="Premium"
            price="R$200,00"
            quantity={300}
            link={"/contact"}
          />
        </section>

        <section className={styles.testimonialssection}>
          <Carrousel start={1} end={4}>
            <Testimonial name="Joaquim Manuel" id={1}>
              Uso a Adessonet há mais de dois anos, e dentre as que já usei, ela
              é a melhor!
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
              Já sou uma cliente fiel da Adessonet, e já recomendei para várias
              pessoas. A melhor de todas!
            </Testimonial>
          </Carrousel>
        </section>
      </Layout>
    </>
  );
}
