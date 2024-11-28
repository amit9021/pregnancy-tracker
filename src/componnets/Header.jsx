import React from "react";
import styles from "../assets/styles/styles.module.css";
import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="/home">בית</a>
            </li>
            <li>
              <a href="/about">נעים להכיר</a>
            </li>
            <li>
              <a href="/emotional-treatments">טיפולים רגשיים</a>
            </li>

            <li>
              <a href="/treatment-tools">כלים ושיטות טיפול</a>
            </li>
            <li>
              <a href="/pregnancy-support">ליווי הריון ולידה</a>
            </li>
            <li>
              <a href="/recommendations">המלצות ותודות</a>
            </li>

            <li>
              <a href="/contact">בואו נדבר</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
