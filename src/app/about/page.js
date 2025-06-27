"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import Footer from "../components/Footer";
import {
  FaWifi,
  FaCar,
  FaSwimmingPool,
  FaDumbbell,
  FaConciergeBell,
  FaUtensils,
  FaSpa,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";

function About() {
  const [roomCount, setRoomCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate room count to 200+ (slower)
          let roomCounter = 0;
          const roomInterval = setInterval(() => {
            roomCounter += 2;
            setRoomCount(roomCounter);
            if (roomCounter >= 200) {
              clearInterval(roomInterval);
              setRoomCount(200);
            }
          }, 50);

          // Animate experience count to 20+ (slower)
          let expCounter = 0;
          const expInterval = setInterval(() => {
            expCounter += 1;
            setExperienceCount(expCounter);
            if (expCounter >= 20) {
              clearInterval(expInterval);
              setExperienceCount(20);
            }
          }, 150);

          // Service - fade in animation instead of counting
          setTimeout(() => {
            setServiceCount(24);
          }, 500);

          // Satisfaction - fade in animation instead of counting
          setTimeout(() => {
            setSatisfactionCount(5.0);
          }, 800);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        {/* About Content Section */}
        <div className={styles.aboutContentSection}>
          <h2 className={styles.aboutContentTitle}>
            Grand Max Luxury Hotel'e Hoş Geldiniz
          </h2>
          <p className={styles.aboutDescription}>
            Şehrin kalbinde, ancak huzur dolu bir vaha olarak konumlanan
            otelimiz, misafirlerine unutulmaz bir konaklama deneyimi sunmak için
            tasarlandı. Modern lüksün incelikli detaylarla harmanlandığı Grand
            Max, iş seyahatlerinizden romantik kaçamaklara, aile tatillerinden
            özel kutlamalara kadar her türlü ihtiyacınızı karşılamak üzere
            özenle düşünülmüş hizmetler sunar.
          </p>
        </div>

        {/* Information Cards Section */}
        <div className={styles.infoCardsSection}>
          <div className={styles.infoCardsGrid}>
            <div className={styles.infoCard}>
              <FaWifi className={styles.infoCardIcon} />
              <h3 className={styles.infoCardTitle}>Ücretsiz WiFi</h3>
              <p className={styles.infoCardDescription}>
                Tüm otel genelinde yüksek hızlı internet erişimi
              </p>
            </div>
            <div className={styles.infoCard}>
              <FaCar className={styles.infoCardIcon} />
              <h3 className={styles.infoCardTitle}>Vale Hizmeti</h3>
              <p className={styles.infoCardDescription}>
                24 saat vale park hizmeti ve güvenli otopark
              </p>
            </div>
            <div className={styles.infoCard}>
              <FaSwimmingPool className={styles.infoCardIcon} />
              <h3 className={styles.infoCardTitle}>Havuz & Spa</h3>
              <p className={styles.infoCardDescription}>
                Kapalı havuz ve tam donanımlı spa merkezi
              </p>
            </div>
            <div className={styles.infoCard}>
              <FaUtensils className={styles.infoCardIcon} />
              <h3 className={styles.infoCardTitle}>Gourmet Restoran</h3>
              <p className={styles.infoCardDescription}>
                Dünya mutfağından özel lezzetler ve 24 saat oda servisi
              </p>
            </div>
            <div className={styles.infoCard}>
              <FaDumbbell className={styles.infoCardIcon} />
              <h3 className={styles.infoCardTitle}>Fitness Center</h3>
              <p className={styles.infoCardDescription}>
                Modern ekipmanlarla donatılmış fitness salonu
              </p>
            </div>
            <div className={styles.infoCard}>
              <FaConciergeBell className={styles.infoCardIcon} />
              <h3 className={styles.infoCardTitle}>Concierge</h3>
              <p className={styles.infoCardDescription}>
                7/24 concierge hizmeti ve kişisel asistan desteği
              </p>
            </div>
            <div className={styles.infoCard}>
              <FaSpa className={styles.infoCardIcon} />
              <h3 className={styles.infoCardTitle}>Wellness</h3>
              <p className={styles.infoCardDescription}>
                Masaj, sauna ve wellness hizmetleri
              </p>
            </div>
            <div className={styles.infoCard}>
              <FaShieldAlt className={styles.infoCardIcon} />
              <h3 className={styles.infoCardTitle}>Güvenlik</h3>
              <p className={styles.infoCardDescription}>
                24 saat güvenlik ve kamera sistemi
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className={styles.statisticsSection} ref={statsRef}>
          <h2 className={styles.statisticsTitle}>Rakamlarla Grand Max</h2>
          <div className={styles.statisticsGrid}>
            <div className={styles.statisticItem}>
              <span className={styles.statisticNumber}>{roomCount}+</span>
              <span className={styles.statisticLabel}>Oda</span>
            </div>
            <div className={styles.statisticItem}>
              <span className={styles.statisticNumber}>{serviceCount}/7</span>
              <span className={styles.statisticLabel}>Hizmet</span>
            </div>
            <div className={styles.statisticItem}>
              <div className={styles.starRating}>
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`${styles.starIcon} ${
                      index < satisfactionCount
                        ? styles.starFilled
                        : styles.starEmpty
                    }`}
                  />
                ))}
              </div>
              <span className={styles.statisticLabel}>Yıldız Memnuniyet</span>
            </div>
            <div className={styles.statisticItem}>
              <span className={styles.statisticNumber}>{experienceCount}+</span>
              <span className={styles.statisticLabel}>Yıllık Deneyim</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
