import styles from "./page.module.css";
import Page from "../components/Page";

export default function Business() {
  return (
    <Page styles={styles}>
        <section style={{ padding: 16 }}>
          <h1>Business</h1>
          <p>Select a business from the home page to view details.</p>
        </section>
    </Page>
  );
}
