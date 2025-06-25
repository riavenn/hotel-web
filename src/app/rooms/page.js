'use client';
import React from 'react';
import styles from './rooms.module.css';
import Footer from '../components/Footer';
import { FaUser, FaUsers } from 'react-icons/fa';

const rooms = [
  {
    id: 1,
    name: "Deluxe Oda",
    image: "/images/gallery-1.jpg",
    price: "₺2,500",
    size: "35 m²",
    capacity: 2,
    capacityText: "2 Kişi",
    features: ["Şehir Manzarası", "Minibar", "Wi-Fi", "Klima"]
  },
  {
    id: 2,
    name: "Superior Oda",
    image: "/images/gallery-2.jpg",
    price: "₺3,200",
    size: "42 m²",
    capacity: 2,
    capacityText: "2 Kişi",
    features: ["Deniz Manzarası", "Balkon", "Minibar", "Wi-Fi"]
  },
  {
    id: 3,
    name: "Junior Süit",
    image: "/images/gallery-3.jpg",
    price: "₺4,800",
    size: "65 m²",
    capacity: 3,
    capacityText: "3 Kişi",
    features: ["Panoramik Manzara", "Oturma Alanı", "Minibar", "Jakuzi"]
  }
];

function Rooms() {
  return (
    <div className={styles.roomsPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>ODALARIMIZ</h1>
        <p className={styles.pageSubtitle}>
          Konforun ve lüksün buluştuğu odalarımızda unutulmaz bir konaklama deneyimi yaşayın
        </p>
        
        <div className={styles.roomsGrid}>
          {rooms.map((room) => (
            <div key={room.id} className={styles.roomCard}>
              <div className={styles.roomImageContainer}>
                <img src={room.image} alt={room.name} className={styles.roomImage} />
                <div className={styles.roomPrice}>{room.price}<span>/gece</span></div>
              </div>
              
              <div className={styles.roomContent}>
                <h3 className={styles.roomName}>{room.name}</h3>
                
                <div className={styles.roomSpecs}>
                  <div className={styles.roomSpec}>
                    <span className={styles.specIcon}>📐</span>
                    <span>{room.size}</span>
                  </div>
                  <div className={styles.roomSpec}>
                    <span className={styles.specIcon}>
                      {room.capacity === 2 ? (
                        <><FaUser /><FaUser /></>
                      ) : room.capacity === 3 ? (
                        <><FaUser /><FaUser /><FaUser /></>
                      ) : (
                        <FaUsers />
                      )}
                    </span>
                    <span>{room.capacityText}</span>
                  </div>
                </div>
                
                <div className={styles.roomFeatures}>
                  {room.features.map((feature, index) => (
                    <span key={index} className={styles.feature}>{feature}</span>
                  ))}
                </div>
                
                <button className={styles.bookButton}>
                  Rezervasyon Yap
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
}

export default Rooms;