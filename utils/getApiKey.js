import ApiKeyModel from "../models/apiKeyModel.js";
import connectMongo from "./connectmongo.js";
import newKey from "./newKey.js";

const getApiKey = async () => {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    console.log("LOOKING FOR API KEY");
    const key = await ApiKeyModel.findOne();
    if (key) {
      console.log("KEY FOUND");
      const now = new Date();
      const time = Math.floor(now.getTime() / 1000);
      console.log(time);
      console.log(key.expires_on);
      if (key.expires_on < time - 60) {
        console.log("KEY EXPIRED, GETTING NEW KEY");
        const nkey = await newKey();
        console.log("REPLACING OLD KEY");
        await ApiKeyModel.replaceOne({}, nkey);
        console.log("KEY REPLACED");
        return nkey.access_token;
      } else {
        console.log("KEY IN DATE");
        return key.access_token;
      }
    } else {
      console.log("NO KEY FOUND, GETTING NEW KEY");
      const nkey = await newKey();
      console.log("INSERTING KEY");
      await ApiKeyModel.create(nkey, function (err) {
        console.log(err);
      });
      console.log("KEY INSERTED");
      return nkey.access_token;
    }
  } catch (error) {
    console.log("SOMETHING DIDNT WORK");
    console.log(error);
  }
};

export default getApiKey;
