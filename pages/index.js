import Head from "next/head";
import Fact from "../components/Fact";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lug Lite</title>
        <meta
          name="description"
          content="Reduce the carbon footprint of your luggage"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Hero heading={"Lug Lite"} message={"Welcome to Lug Lite"} />
        <Fact />
      </main>
    </div>
  );
}
