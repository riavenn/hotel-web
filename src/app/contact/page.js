"use client";

import styles from "./contact.module.css";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("./Map"), { ssr: false });

const ContactPage = () => {
  return (
    <div className={styles.contactPageContainer}>
      <div className={styles.container}>
        <div className={styles.contactContent}>
          <div className={styles.formContainer}>
            <h2 className={styles.sectionTitle}>Bize Ulaşın</h2>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Adınız:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">E-posta Adresiniz:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Konu:</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Gönder
              </button>
            </form>
          </div>

          <div className={styles.contactInfo}>
            <div>
              <h2 className={styles.sectionTitle}>Otel İletişim Bilgileri</h2>
              <p>
                <FaMapMarkerAlt /> Adres: Kızılay Mah. Atatürk Bulvarı No: 123,
                Ankara
              </p>
              <p>
                <FaPhone /> Telefon: +90 312 456 7890
              </p>
              <p>
                <FaEnvelope /> E-posta: info@luxuryhotel.com
              </p>
            </div>
            <div className={styles.mapContainer}>
              <h2 className={styles.sectionTitle}>Konumumuz</h2>
              <MapWithNoSSR />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
