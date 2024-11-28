import React from "react";
import styles from "../assets/styles/styles.module.css";

export default function Services({ title, text }) {
  return (
    <article className={styles.servicesArticle}>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
