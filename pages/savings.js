import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import stylesTwo from "../styles/Hero.module.css";
import mypic from "../public/sdg250.svg";
import Fact from "../components/Fact";

export default function Savings() {
  const router = useRouter();
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
        <div className={stylesTwo.hero_wrapper}>
          {/* all needs dynamic */}
          <p className={stylesTwo.hero_p}>
            You saved {router.query.newSavings} kg of carbon emissions out of a
            possible {router.query.preSavings} by reducing your luggage on this
            trip
          </p>
          <Image
            src={mypic}
            className={stylesTwo.divpic}
            width="100%"
            alt="Picture of the author"
          />
          <p className={stylesTwo.hero_p}>
            Thank you for reducing you carbon emissions today.
            <br /> Your efforts directly support Sustainable Development Goal
            12:
            <br /> Ensure sustainable consumption and production patterns.
            <br /> To find out more{" "}
            <a href="https://sdgs.un.org/goals/goal12" formTarget="_blank">
              Click here
            </a>
          </p>
          <p className={stylesTwo.hero_p}>
            By saving {router.query.savings} kg of carbon emissions you have
            gained rewards
          </p>
          <button className={stylesTwo.hero_b}>Claim Rewards</button>
        </div>
        <Fact />
      </main>
    </div>
  );
}
