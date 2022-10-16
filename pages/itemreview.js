import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import stylesTwo from "../styles/Hero.module.css";
import Image from "next/image";
import mypic from "../public/sdg12.svg";
import Fact from "../components/Fact";
export default function Itemreview() {
  const router = useRouter();

  const handleNext = () => {
    router.push({
      pathname: "/lugrecheck",
      query: router.query,
    });
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
        <div className={stylesTwo.hero_wrapperTwo}>
          {/* all needs dynamic */}

          <div className={stylesTwo.divider}>
            <p className={stylesTwo.hero_p}>
              You are going away for {router.query.nights} nights.
            </p>
            <p className={stylesTwo.hero_r}>
              Can you get away with one set of clothes?
            </p>
            <div className={stylesTwo.dividertwo}>
              <Image
                src={mypic}
                className={stylesTwo.divpic}
                width="100%"
                alt="Picture of the author"
              />
              <p className={stylesTwo.hero_o}>
                Removing 1 pair of clothing could reduce your carbon emissions
                by up to 2.772 kg
              </p>
            </div>
          </div>

          <div className={stylesTwo.divider}>
            <p className={stylesTwo.hero_p}>
              You have packed {router.query.books} book.
            </p>
            <p className={stylesTwo.hero_r}>
              Are you going to read that book? How about reading the newspaper
              in the airport or hotel instead?
            </p>
            <div className={stylesTwo.dividertwo}>
              <Image
                src={mypic}
                className={stylesTwo.divpic}
                width="100%"
                alt="Picture of the author"
              />
              <p className={stylesTwo.hero_o}>
                Removing 1 book could reduce your carbon emissions by up to
                1.134 kg
              </p>
            </div>
          </div>

          <div className={stylesTwo.divider}>
            <p className={stylesTwo.hero_p}>
              You have packed {router.query.shoes} pairs of shoes.
            </p>
            <p className={stylesTwo.hero_r}>
              Could you do with 1 less pair of shoes?
            </p>
            <div className={stylesTwo.dividertwo}>
              <Image
                src={mypic}
                className={stylesTwo.divpic}
                width="100%"
                alt="Picture of the author"
              />
              <p className={stylesTwo.hero_o}>
                Removing 1 pair of shoes could reduce your carbon emissions by
                up to 2.016 kg
              </p>
            </div>
          </div>

          <div className={stylesTwo.divider}>
            {router.query.food ? (
              <p className={stylesTwo.hero_p}>You have packed food.</p>
            ) : (
              ""
            )}
            <p className={stylesTwo.hero_r}>
              Do you need to pack this food? Can you get some food when you
              land?
            </p>
            <div className={stylesTwo.dividertwo}>
              <Image
                src={mypic}
                className={stylesTwo.divpic}
                width="100%"
                alt="Picture of the author"
              />
            </div>
          </div>

          <div className={stylesTwo.divider}>
            {router.query.hairdryer ? (
              <p className={stylesTwo.hero_p}>You have packed a hairdryer.</p>
            ) : (
              ""
            )}
            <p className={stylesTwo.hero_r}>
              Check to see if your accomodation has a hairdryer
            </p>
            <div className={stylesTwo.dividertwo}>
              <Image
                src={mypic}
                className={stylesTwo.divpic}
                width="100%"
                alt="Picture of the author"
              />
              <p className={stylesTwo.hero_o}>
                Removing 1 pair of clothing could reduce your carbon emissions
                by up to 2.268 kg
              </p>
            </div>
          </div>

          <button onClick={handleNext} className={stylesTwo.hero_b}>
            Next
          </button>
        </div>
        <Fact />
      </main>
    </div>
  );
}
