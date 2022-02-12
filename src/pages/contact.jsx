import Layout from "../components/Layout";
import styles from "../../styles/contacts.module.css";
import { ImWhatsapp } from "react-icons/im";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <Layout title="Contato">
      <section className={styles.contactsection}>
        <div className={styles.whatsappdiv}>
          <h1 className={styles.title}>Whatsapp</h1>
          <span className={styles.whatsapp}>
            <ImWhatsapp />
            <a
              target="_blank"
              href={
                "https://api.whatsapp.com/send?phone=0000000000&text=Salve%20o%20nosso%20n%C3%BAmero%20nos%20seus%20contatos!"
              }
            >
              ( 00 ) 00000-0000
            </a>
          </span>
        </div>

        <div className={styles.emaildiv}>
          <h1 className={styles.title}>Email</h1>
          <span className={styles.email}>
            <AiOutlineMail /> <i>contato@adessonet.com</i>
          </span>
        </div>
      </section>

      <section className={styles.locationsection}>
        <h1 className={styles.title}>Localização: </h1>

        <ul className={styles.location}>
          <li>
            <FaMapMarkerAlt />
            Rua Desembargador - Nº 324 - Bairro Estrelas do Sul - Próximo ao
            Correios
          </li>

          <li>
            <FaMapMarkerAlt />
            Rua Joaquim Freitas - Nº 423 - Bairro Lagoas do Norte - Próximo ao
            Banco Ideal
          </li>

          <li>
            <FaMapMarkerAlt />
            Rua do Poeta - Nº 20 - Bairro do Mel - Próximo à Praça
          </li>
        </ul>
      </section>
    </Layout>
  );
}
