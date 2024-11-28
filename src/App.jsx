import React from "react";
import styles from "./assets/styles/styles.module.css";
import Header from "./componnets/Header";
import Footer from "./componnets/Footer";
import Hero from "./componnets/Hero";
import DB from "./DB/DB.json";
import Content from "./componnets/Content";
import Services from "./componnets/Services";
import Whattsapp from "./componnets/Whattsapp";

function App() {
  const content = DB.content;
  const services = DB.services;
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600&display=swap"
        rel="stylesheet"
      />
      <div className={styles.body}>
        <Header />
        <Hero />

        <main className={styles.mainSection}>
          <section className={`${styles.content} ${styles.container}`}>
            {content.map((item) => {
              return (
                <Content key={item.id} title={item.title} text={item.text} />
              );
            })}
          </section>
          <section className={`${styles.services} ${styles.container}`}>
            <h2>מה כולל המעקב בקליניקה?</h2>
            {services.map((item) => {
              return (
                <Services key={item.id} title={item.title} text={item.text} />
              );
            })}
          </section>
        </main>

        <Whattsapp />
        <Footer />
      </div>
    </>
  );
}

export default App;
