import React from "react";
import styles from "../assets/styles/styles.module.css";
import { LineAxis } from "@mui/icons-material";
import { BsLine } from "react-icons/bs";
import { Divider } from "@mui/material";

export default function Content({ title, text }) {
  return (
    <article className={styles.contentArticle}>
      <h3>{title}</h3>
      <p>{text}</p>
      <Divider />
    </article>
  );
}
