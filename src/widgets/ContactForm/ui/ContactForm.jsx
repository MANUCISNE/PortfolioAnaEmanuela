import { useRef, useState, useEffect } from "react";
import axios from "axios";
import styles from "./ContactForm.module.css";
import { Button } from "~/shared/UI/Button";
import { useTranslation } from "react-i18next";
//import sendEmail from "~/services/emailServices";

const ContactForm = ({ mode }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [formSent, setFormSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const temp = localStorage.getItem("formData");
    const loadedFormData = JSON.parse(temp);

    if (loadedFormData) {
      setFormData(loadedFormData);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(formData);
    localStorage.setItem("formData", temp);
  }, [formData]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const form = useRef();

  {/*const sendEmailService = async (e) => {
  e.preventDefault();

    try {
      const response = await sendEmail({
        nome: formData.nome,
        email: formData.email,
        mensagem: formData.mensagem,
      });

      console.log(response.data.message);
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      setErrorMessage(t("try-again-later"));
    } finally {
          setFormData({
          nome: "",
          email: "",
          mensagem: "",
        });
        setFormSent(true);

    }
  }*/}

  return (
    <div className={styles.contactFormContainer}>
      <form
        className={`${styles.contactForm} ${
          mode ? styles.contactFormDark : styles.contactFormLight
        }`}
        ref={form}
        onSubmit={sendEmailService}
      >
        <label>{t("name")}</label>
        <input
          value={formData.nome}
          onChange={handleChange}
          className={styles.contactFormInput}
          type="text"
          name="nome"
          placeholder={t("name-placeholder")}
          required
        />
        <label>Email</label>
        <input
          value={formData.email}
          onChange={handleChange}
          className={styles.contactFormInput}
          type="email"
          name="email"
          placeholder="YourName@email.com"
          required
        />
        <label>{t("message")}</label>
        <textarea
          value={formData.mensagem}
          onChange={handleChange}
          className={styles.contactFormArea}
          name="mensagem"
          rows="7"
          placeholder={t("message-placeholder")}
          required
        />
        <Button type="submit" value="Send">
          {t("submit-btn")}
        </Button>
        {formSent && <p className={styles.messageSent}>{t("thank-you")}</p>}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
