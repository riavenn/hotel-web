"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";

// --- DÜZENLENMİŞ HEADER BİLEŞENİ ---
function Header() {
  const originalImages = [
    "/images/hotel-1.jpg",
    "/images/hotel-2.jpg",
    "/images/hotel-3.jpg",
    "/images/hotel-4.jpg",
  ];

  // 1. Düzeltilmiş Dizi Yapısı: [son, ...orijinal, ilk]
  // Bu yapı, sonsuz döngü için standart bir yaklaşımdır.
  const images = [
    originalImages[originalImages.length - 1], // Son resmi başa ekle
    ...originalImages,
    originalImages[0], // İlk resmi sona ekle
  ];

  // 2. Başlangıç İndeksi: İlk "gerçek" resim olan 1. indeksten başla.
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // 3. Otomatik Kaydırma Efekti
  useEffect(() => {
    const interval = setInterval(() => {
      // Sadece indeksi bir artır. Karmaşık koşullara gerek yok.
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }, 5000); // Her 5 saniyede bir resmi değiştir

    return () => clearInterval(interval);
  }, []); // Bu effect'in tekrar çalışmasına gerek yok, bu yüzden bağımlılık dizisi boş.

  // 4. Sonsuz Döngü için "Zıplama" Efekti
  useEffect(() => {
    // Eğer geçiş (transition) yoksa (yani zıplama yeni yapıldıysa),
    // çok kısa bir süre sonra tekrar aktif et.
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50); // Tarayıcının değişikliği algılaması için küçük bir gecikme.
      return () => clearTimeout(timeout);
    }

    // Slider, sondaki kopya görüntüye ulaştığında bu koşul tetiklenir.
    if (currentImageIndex === images.length - 1) {
      // CSS animasyonunun (1s) bitmesini bekle, sonra zıpla.
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // Zıplama için animasyonu kapat
        setCurrentImageIndex(1); // İlk "gerçek" resme anında dön
      }, 1000); // Geçiş süresiyle (transition-duration) aynı olmalı
      return () => clearTimeout(timeout);
    }
  }, [currentImageIndex, isTransitioning, images.length]);

  return (
    <header className={styles.header}>
      <div
        className={styles.imageSliderContainer}
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
          // isTransitioning durumuna göre CSS transition'ı dinamik olarak uygula
          transition: isTransitioning ? "transform 1s ease-in-out" : "none",
        }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.sliderImage}
            style={{ backgroundImage: `url(${image})` }}></div>
        ))}
      </div>
      <div className={styles.headerContent}>
        <h1 className={styles.headerHotelName}>Grand Max Luxury</h1>
        <p className={styles.hotelSlogan}>Her Ziyaret, Yeni Bir Hikaye.</p>
        <button className={styles.browseRoomsButton}>Odalara Göz At</button>
      </div>
    </header>
  );
}

// --- DEĞİŞTİRİLMEMİŞ HOME BİLEŞENİ ---
export default function Home() {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [reviewsPerPage, setReviewsPerPage] = useState(3);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const autoSlideRef = useRef();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setReviewsPerPage(1);
      } else if (window.innerWidth <= 1024) {
        setReviewsPerPage(2);
      } else {
        setReviewsPerPage(3);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rooms = [
    {
      name: "Standart Oda",
      image: "/images/room-standart.jpg",
      features: ["2 Kişilik Oda", "35 m²", "Çift Kişilik Yatak"],
    },
    {
      name: "Deluxe Oda",
      image: "/images/room-deluxe.jpg",
      features: ["3 Kişilik Oda", "45 m²", "King Boy Yatak"],
    },
    {
      name: "Suit Oda",
      image: "/images/room-suit.jpg",
      features: ["4 Kişilik Oda", "70 m²", "King Boy Yatak, Tek Kişilik Yatak"],
    },
  ];

  const galleryImages = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg",
    "/images/gallery-7.jpg",
    "/images/gallery-8.jpg",
  ];

  const roomCommonFeatures = [
    "Kartlı kilit sistemi",
    " Oturma alanı",
    "Minibar",
    "Kasa",
    " Wi-Fi",
    " Balkon",
    " Merkezi veya Split klima",
    "TV",
  ];

  const roomCommonFeatures2 = [
    " Çay & kahve seti",
    "Telefon",
    " Bornoz",
    "Fön",
    "Terlik",
    " Yangın ihbar ve söndürme seti",
    "Duş",
    " Zemin Laminant Parke",
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarLeft}>
          {/* Hotel Name and Logo */}
          <img
            src="/otel-logo.png"
            alt="Hotel Logo"
            className={styles.hotelLogo}
          />
        </div>
        <div className={styles.navbarRight}>
          <a href="#home" className={styles.navLink}>
            Anasayfa
          </a>
          <a href="#about" className={styles.navLink}>
            Hakkında
          </a>
          <a href="#rooms" className={styles.navLink}>
            Odalar
          </a>
          <a href="#services" className={styles.navLink}>
            Hizmetler
          </a>
          <a href="#contact" className={styles.navLink}>
            İletişim
          </a>
        </div>
      </nav>
      {/* Header */}
      <Header />
      {/* About Section */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutLeft}>
          <h2 className={styles.aboutHotelName}>Grand Max Luxury</h2>
        </div>
        <div className={styles.aboutRight}>
          <p className={styles.hotelDescription}>
            Lüksün konforla buluştuğu seçkin otelimize hoş geldiniz. Şehrin
            kalbinde yer alan otelimizde, konaklamanızı unutulmaz kılmak için
            benzersiz hizmet ve olanaklar sunuyoruz.
          </p>
        </div>
      </section>
      <section className={styles.roomPreviewSection}>
        <div className={styles.roomPreviewLeft}>
          <div
            className={styles.roomImageContainer}
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}>
            <img
              src={rooms[selectedRoomIndex].image}
              alt={rooms[selectedRoomIndex].name}
              className={styles.roomImage}
            />
            <div className={styles.roomImageName}>
              {rooms[selectedRoomIndex].name}
            </div>
            {showOverlay && (
              <div className={styles.roomImageOverlay}>
                <div className={styles.roomOverlaySeparator}></div>
                <ul className={styles.roomOverlayFeatures}>
                  {rooms[selectedRoomIndex].features.map(
                    (feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className={styles.roomPreviewRight}>
          <ul className={styles.roomMenu}>
            {rooms.map((room, index) => (
              <li
                key={index}
                className={`${styles.roomMenuItem} ${
                  selectedRoomIndex === index ? styles.activeRoom : ""
                }`}
                onClick={() => setSelectedRoomIndex(index)}>
                {room.name}
              </li>
            ))}
          </ul>
          <div className={styles.commonFeaturesText}>
            Tüm odalar için ortak özellikler
          </div>
          <div className={styles.commonFeatures}>
            <div className={styles.commonFeaturesList}>
              {roomCommonFeatures.map((feature, index) => {
                return (
                  <div key={index} className={styles.commonFeature}>
                    <div>
                      <i>
                        <IoIosArrowForward />
                      </i>
                      {feature}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.commonFeaturesList}>
              {roomCommonFeatures2.map((feature, index) => {
                return (
                  <div key={index} className={styles.commonFeature}>
                    <div>
                      <i>
                        <IoIosArrowForward />
                      </i>
                      {feature}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.information}>
            <p className={styles.informationText}>
              <i>
                <HiInformationCircle />
              </i>
              Resimlerin üzerine gelerek oda detaylarını görebilirsiniz.
            </p>
          </div>
        </div>
      </section>
      {/* Image Gallery */}
      <section className={styles.imageGallery}>
        <h2 className={styles.sectionTitle}>Image Gallery</h2>
        <div className={styles.galleryGrid}>
          {galleryImages.map((image, index) => {
            return (
              <div key={index} className={styles.galleryImageContainer}>
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className={styles.galleryImage}
                />
              </div>
            );
          })}
        </div>
      </section>
      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <img
            src="/otel-logo.png"
            alt="Hotel Logo"
            className={styles.footerLogo}
          />
        </div>
        <div className={styles.footerText}>
          <p className={styles.footerCopyright}>© 2025 Tüm hakları saklıdır.</p>
          This website was designed and developed by Mert Saykal.
        </div>
        <div className={styles.socialMediaIcons}>
          <i>
            <FaInstagram />
          </i>
          <i>
            <FaYoutube />
          </i>
          <i>
            <FaTwitter />
          </i>
        </div>
      </footer>
    </div>
  );
}
