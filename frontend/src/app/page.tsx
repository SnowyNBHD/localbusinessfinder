import styles from "./page.module.css";
import Nav from './components/Nav'

import BusinessCard from './components/BusinessCard'

export default function Home() {
  return (
    <div className={styles.page}>
      <Nav />

      <section id={styles.main} className="main">
        <section className={styles.hero}></section>
        
        <div className={styles.navBackdrop}>Featured Businesses:</div>

        <section className={styles.featured}>
          <BusinessCard 
            url="business"
            name="McDonalds"
            type="Dining"
            description="Fast-Food Restaurant"
            rating={3.5}
          />
          <BusinessCard 
            url="business"
            name="Example"
            type="Test"
            description="This is a test"
            rating={1}
          />
          <BusinessCard 
            url="business"
            name="Example"
            type="Test"
            description="This is a test"
            rating={1.5}
          />
          <BusinessCard 
            url="business"
            name="Example"
            type="Test"
            description="This is a test"
            rating={5}
          />
        </section>

      </section>
      <div className={styles.verticalDivider}></div>
      <footer>Copyright © 2026-2026 Welp Inc. Welp, Elite Squad, Welp logo, Welp burst and related marks are registered trademarks of Welp.</footer>
    </div>
  );
}
