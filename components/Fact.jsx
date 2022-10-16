import styles from "../styles/Fact.module.css";

import axios from "axios";
import { useEffect, useState } from "react";

const Fact = () => {
  const [emission, setEmission] = useState({
    Country: "Peru",
    Measure: "tonnes of CO2-equivalent",
    Time: "2017",
    Value: "2007497.3426354",
  });

  useEffect(() => {
    axios.get("/api/emissions").then((res) => {
      setEmission(res.data.emission);
    });
  }, []);

  return (
    <div className={styles.factdiv}>
      <p className={styles.factp}>
        {emission
          ? `In ${emission.Time} ${emission.Country} had an estimated ${emission.Value} ${emission.Measure} total emissions from flights`
          : ""}
      </p>
    </div>
  );
};

export default Fact;
