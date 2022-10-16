import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import stylesTwo from "../styles/Hero.module.css";
import Fact from "../components/Fact";

export default function ItemCheck() {
  const initItems = {
    nights: "0",
    books: "0",
    shoes: "0",
    food: "false",
    hairdryer: "false",
  };

  const router = useRouter();
  const [lugItems, setLugItems] = useState(initItems);
  const handleChange = (id, value) => {
    setLugItems({ ...lugItems, [id]: value });
  };

  const handleItems = async (event) => {
    event.preventDefault();
    try {
      const dataToSend = {
        ...lugItems,
        savings: router.query.savings,
        coPerKg: router.query.coPerKg,
        preWeight: router.query.preWeight,
      };
      router.push({ pathname: "/itemreview", query: dataToSend });
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
            You can reduce your carbon emissions by up to {router.query.savings}
            kg
          </p>
          <form className={stylesTwo.hero_form}>
            <label className={stylesTwo.hero_p}>
              How many nights are you going away for?
            </label>
            <input
              type="number"
              id="nights"
              name="nights"
              value={lugItems.nights}
              className={stylesTwo.hero_input}
              onChange={({ target }) => handleChange(target?.id, target?.value)}
            ></input>

            <label className={stylesTwo.hero_p}>
              Have you packed any books?
            </label>
            <select
              id="books"
              name="books"
              className={stylesTwo.hero_input}
              onChange={({ target }) => handleChange(target?.id, target?.value)}
            >
              <option value="0">No Books</option>
              <option value="1">1 Book</option>
              <option value="2">2 Books</option>
              <option value="3">3 Books</option>
            </select>

            <label className={stylesTwo.hero_p}>
              How many pairs of shoes are you taking?
            </label>
            <select
              id="shoes"
              name="shoes"
              className={stylesTwo.hero_input}
              onChange={({ target }) => handleChange(target?.id, target?.value)}
            >
              <option value="0">No Shoes</option>
              <option value="1">1 Pair</option>
              <option value="2">2 Pairs</option>
              <option value="3">3 Pairs</option>
            </select>

            <label className={stylesTwo.hero_p}>Are you taking any food?</label>
            <select
              id="food"
              name="food"
              className={stylesTwo.hero_input}
              onChange={({ target }) => handleChange(target?.id, target?.value)}
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>

            <label className={stylesTwo.hero_p}>
              Are you taking a hair dryer?
            </label>
            <select
              id="hairdryer"
              name="hairdryer"
              className={stylesTwo.hero_input}
              onChange={({ target }) => handleChange(target?.id, target?.value)}
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
            <button className={stylesTwo.hero_b} onClick={handleItems}>
              Next
            </button>
          </form>
        </div>
        <Fact />
      </main>
    </div>
  );
}
