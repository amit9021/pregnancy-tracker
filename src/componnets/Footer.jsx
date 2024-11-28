import React from "react";
import styles from "../assets/styles/styles.module.css";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <section className={styles.contact}>
        <div>
          <p>צרו קשר: 052-1234567</p>
          <p>אימייל:</p>
          <p>עוד דרכים ליצירת קשר </p>
        </div>
        <div className={styles.social}>
          <p>עקבו אחרינו:</p>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://Whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </section>
      <div className={styles.footer}>
        <p>&copy; 2024 אילונה חלמר. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
}
