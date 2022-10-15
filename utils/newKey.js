import axios from "axios";
import qs from "qs";

const newKey = async () => {
  const sendData = qs.stringify({
    grant_type: "client_credentials",
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    resource: "https://partner-test.api.chooose.today",
  });
  const config = {
    method: "post",
    url: "https://login.microsoftonline.com/04300fc2-8f04-4555-9a5d-c6fac7f23d0c/oauth2/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: sendData,
  };
  try {
    let res = await axios(config);
    if (res.status === 200) {
      console.log("NEW KEY AQUIRED");
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export default newKey;
