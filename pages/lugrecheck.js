import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import stylesTwo from "../styles/Hero.module.css";
import Fact from "../components/Fact";

export default function Lugrecheck() {
  const initLugData = {
    //needs dynamic
    lugweight: 10,
  };

  const router = useRouter();
  const [lugData, setLugData] = useState(initLugData);
  const handleChange = (id, value) => {
    setLugData({ ...lugData, [id]: value });
  };

  const handleSubmitBaggage = async (event) => {
    event.preventDefault();
    try {
      const preSavings = router.query.savings;
      const preWeight = router.query.preWeight;
      const coPerKg = router.query.coPerKg;
      const newSavings = coPerKg * (preWeight - lugData.lugweight);
      router.push({
        pathname: "/savings",
        query: { newSavings: newSavings, preSavings: preSavings },
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
            Now that you have removed some items, reweigh your bag
          </p>
          <form className={stylesTwo.hero_form}>
            <label className={stylesTwo.hero_p} htmlFor="lugweight">
              Enter New Total Luggage Weight{" "}
            </label>
            <input
              id="lugweight"
              name="lugweight"
              placeholder="10"
              value={lugData.lugweight}
              className={stylesTwo.hero_input}
              onChange={({ target }) => handleChange(target?.id, target?.value)}
            />
            <button
              disabled={!lugData.lugweight}
              onClick={handleSubmitBaggage}
              className={stylesTwo.hero_b}
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
