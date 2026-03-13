import styles from "./page.module.css";

import BusinessCard from './components/BusinessCard'
import Page from "./components/Page";

export default function Home() {
  return (
    <Page styles={styles}>
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
    </Page>
  );
}
