import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Hero.module.css";

const Hero = ({ heading, message }) => {
  const initData = {
    origin: "",
    destination: "",
    flight: "",
  };
  const router = useRouter();
  const [dataForm, setData] = useState(initData);
  const handleChange = (id, value) => {
    setData({ ...dataForm, [id]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios({
        url: "/api/carbon",
        method: "POST",
        data: dataForm,
      });
      if (res.status === 200) {
        const carbonData = { kg: `${res.data.carbon.kilosCo2}` };
        router.push({ pathname: "/baggage", query: carbonData });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.hero_wrapper}>
      <h2 className={styles.hero_h2}>{heading}</h2>
      <p className={styles.hero_p}>{message}</p>
      <form className={styles.hero_form}>
        <label htmlFor="origin">Enter Origin</label>
        <input
          id="origin"
          name="origin"
          className={styles.hero_input}
          placeholder="MAN"
          value={dataForm.origin}
          onChange={({ target }) => handleChange(target?.id, target?.value)}
        ></input>
        <label htmlFor="destination">Enter Destination</label>
        <input
          id="destination"
          name="destination"
          className={styles.hero_input}
          placeholder="LIG"
          value={dataForm.destination}
          onChange={({ target }) => handleChange(target?.id, target?.value)}
        ></input>
        <label htmlFor="flight">Enter Flight Number</label>
        <input
          id="flight"
          name="flight"
          placeholder="FR38"
          className={styles.hero_input}
          value={dataForm.flight}
          onChange={({ target }) => handleChange(target?.id, target?.value)}
        ></input>
        <button
          onClick={handleSubmit}
          className={styles.hero_b}
          disabled={
            !dataForm.destination || !dataForm.origin || !dataForm.flight
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Hero;
