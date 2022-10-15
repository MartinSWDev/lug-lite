import axios from "axios";

const getCarbon = async (key, origin, destination, flight) => {
  const config = {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  };
  console.log("GETTING CARBON");
  try {
    const res = await axios.get(
      `https://partner-test.api.chooose.today/v1/footprint/flights/${origin}/${destination}/${flight}?travelClass=economy&passengers=1`,
      config
    );
    if (res.status === 200) {
      console.log("CARBON RETURNED");
      return res.data;
    }
  } catch {
    (error) => {
      console.log(error);
    };
  }
};

export default getCarbon;
