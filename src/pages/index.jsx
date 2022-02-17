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
        <section className={styles.callsection}>
          <div className={styles.call}>
            <span>Venha para a melhor internet da região!</span>
          </div>
          <div className={styles.sales}>
            <span className={styles.titleSales}>Ofertas arrasadoras!!!!</span>
          </div>
        </section>

        <section className={styles.pricessection}>
          <div className={styles.pricelist}>
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
          </div>
        </section>

        <section className={styles.testimonialssection}>
          <Carrousel start={1} end={7}>
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

            <Testimonial name="Nayanne" id={5}>
              Indico, se você quer realmente uma internet de verdade e não
              somente papo furado.
            </Testimonial>

            <Testimonial name="Joel" id={6}>
              Ótima internet e ótimos serviços! Internet mais rápida que já vi!
            </Testimonial>

            <Testimonial name="Catherine" id={7}>
              Depois de analisar todas as internets da região, pude concluir que
              a Adessonet era a melhor, o que comprovei na prática.
            </Testimonial>
          </Carrousel>
        </section>
      </Layout>
    </>
  );
}
