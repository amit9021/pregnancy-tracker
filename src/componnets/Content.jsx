import React from "react";
import styles from "../assets/styles/styles.module.css";

export default function Content({ title, text }) {
  return (
    <article className={styles.contentArticle}>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
