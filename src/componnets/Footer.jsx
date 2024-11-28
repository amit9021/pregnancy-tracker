import React from "react";
import styles from "../assets/styles/styles.module.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <p>צרו קשר: 052-1234567</p>
        <p>אימייל:</p>
        <p>עוד דרכים ליצירת קשר </p>
      </div>
      <div className={styles.footer}>
        <p>&copy; 2024 אילונה חלמר. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
}
