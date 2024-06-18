import Image from "next/image";
import background from "../téléchargement.jpg";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <section style={{ textAlign: "center", marginTop: 48, marginBottom: 40 }}>
          <h1 className={styles.h1}>voila donc la on a un titre yeha</h1> <br />
        </section>
        <p style={{ whiteSpace: "pre-line" }}> Bonjour et bienvenue</p>
        <p style={{ whiteSpace: "pre-line" }}>gisa cecani</p>
        <Image src={background} alt="Picture of the author" />
      </div>
    </main>
  );
}
