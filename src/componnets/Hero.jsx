import React from "react";
import styles from "../assets/styles/styles.module.css";

export default function Hero() {
  return (
    <section>
      <div className={styles.hero}>
        <h1>ליווי הריון ולידה ˚360</h1>
        <p>
          אחרי התלאות שעברת ההיריון הנכסף הגיע, הוא כאן! מהשבוע הראשון שרואים
          "שני פסים" עולות הדאגות, החרדות, הציפיות והמון המון שאלות...
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>צרו קשר</button>
          <button className={styles.button}>קביעת פגישה</button>
        </div>
      </div>
    </section>
  );
}
