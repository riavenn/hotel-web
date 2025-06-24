"use client";
import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          {/* Hotel Info */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Grand Max Luxury</h3>
            <p className={styles.footerDescription}>
              Lüksün konforla buluştuğu seçkin otelimizde unutulmaz bir
              konaklama deneyimi yaşayın.
            </p>
          </div>

          {/* Contact Info */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>İletişim Bilgileri</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>Kızılay Mah. Atatürk Bulvarı No:123, Çankaya/Ankara</span>
              </div>
              <div className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <span>+90 312 123 45 67</span>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <span>info@grandmaxluxury.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Hızlı Linkler</h4>
            <ul className={styles.quickLinks}>
              <li>
                <a href="/">Anasayfa</a>
              </li>
              <li>
                <a href="/about">Hakkında</a>
              </li>
              <li>
                <a href="/rooms">Odalar</a>
              </li>
              <li>
                <a href="/contact">İletişim</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Sosyal Medya</h4>
            <div className={styles.socialMedia}>
              <a href="#" className={styles.socialLink}>
                <FaFacebook />
              </a>
              <a href="#" className={styles.socialLink}>
                <FaInstagram />
              </a>
              <a href="#" className={styles.socialLink}>
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 Grand Max Luxury. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
