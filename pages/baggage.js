import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";
import stylesTwo from "../styles/Hero.module.css";
import Fact from "../components/Fact";

export default function Baggage() {
  const initLugData = {
    lugweight: 0,
  };

  const router = useRouter();
  const [lugData, setLugData] = useState(initLugData);
  const handleChange = (id, value) => {
    setLugData({ ...lugData, [id]: value });
  };

  const handleSubmitBaggage = async (event) => {
    event.preventDefault();
    try {
      const coPerKg = router.query.kg / 100;
      const savings = coPerKg * lugData.lugweight;
      router.push({
        pathname: "/itemcheck",
        query: {
          savings: savings,
          coPerKg: coPerKg,
          preWeight: lugData.lugweight,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

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
          <p className={stylesTwo.hero_p}>
            Your total co2 emissions for this flight {router.query.kg} kg
          </p>
          <p className={stylesTwo.hero_p}>Have you weighed your bag(s) yet?</p>
          <form className={stylesTwo.hero_form}>
            <label className={stylesTwo.hero_p} htmlFor="lugweight">
              Enter Total Luggage Weight in Kg
            </label>
            <input
              id="lugweight"
              name="lugweight"
              placeholder="10"
              className={stylesTwo.hero_input}
              value={lugData.lugweight}
              onChange={({ target }) => handleChange(target?.id, target?.value)}
            />
            <button
              className={stylesTwo.hero_b}
              disabled={!lugData.lugweight}
              onClick={handleSubmitBaggage}
            >
              Submit
            </button>
          </form>
        </div>
        <Fact />
      </main>
    </div>
  );
}
