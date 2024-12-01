import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./assets/styles/styles.module.css";
import Header from "./componnets/Header";
import Footer from "./componnets/Footer";
import Hero from "./componnets/Hero";
import DB from "./DB/DB.json";
import Content from "./componnets/Content";
import Services from "./componnets/Services";
import Whattsapp from "./componnets/Whattsapp";
import Carousel from "react-bootstrap/Carousel";

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
            <h2>תוכן</h2>
            <Carousel data-bs-theme="dark" className={styles.customCarousel}>
              {content.map((item) => {
                return (
                  <Carousel.Item key={item.id}>
                    <Carousel.Caption></Carousel.Caption>
                    <div className={styles.container}>
                      <Content title={item.title} text={item.text} />
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </section>
          <section className={`${styles.services} ${styles.container}`}>
            <h2>מה כולל המעקב בקליניקה?</h2>
            <Carousel data-bs-theme="dark" className={styles.customCarousel}>
              {services.map((item) => {
                return (
                  <Carousel.Item key={item.id}>
                    <Carousel.Caption></Carousel.Caption>
                    <div className={styles.container}>
                      <Content title={item.title} text={item.text} />
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </section>
        </main>

        <Whattsapp />
        <Footer />
      </div>
    </>
  );
}

export default App;
