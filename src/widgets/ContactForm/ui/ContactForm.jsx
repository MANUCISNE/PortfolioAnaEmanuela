import { useRef, useState, useEffect } from "react";
import axios from "axios";
import styles from "./ContactForm.module.css";
import { Button } from "~/shared/UI/Button";
import { useTranslation } from "react-i18next";

const ContactForm = ({ mode }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
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

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/enviar-email", {
        nome: formData.user_name,
        email: formData.user_email,
        mensagem: formData.message,
      });

      if (response.data.success) {
        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });
        setFormSent(true);
      } else {
        setErrorMessage(t("email-not-sent"));
      }

      console.log(response.data.message);
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      setErrorMessage(t("try-again-later"));
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      <form
        className={`${styles.contactForm} ${
          mode ? styles.contactFormDark : styles.contactFormLight
        }`}
        ref={form}
        onSubmit={sendEmail}
      >
        <label>{t("name")}</label>
        <input
          value={formData.user_name}
          onChange={handleChange}
          className={styles.contactFormInput}
          type="text"
          name="user_name"
          placeholder={t("name-placeholder")}
          required
        />
        <label>Email</label>
        <input
          value={formData.user_email}
          onChange={handleChange}
          className={styles.contactFormInput}
          type="email"
          name="user_email"
          placeholder="YourName@email.com"
          required
        />
        <label>{t("message")}</label>
        <textarea
          value={formData.message}
          onChange={handleChange}
          className={styles.contactFormArea}
          name="message"
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
