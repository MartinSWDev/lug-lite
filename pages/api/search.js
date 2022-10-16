import CityModel from "../../models/cityModel";
import connectMongo from "../../utils/connectmongo";

export default async (req, res) => {
  try {
    if (req.query.City.includes(",") || req.query.City.includes(" ")) {
    }
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    const result = await CityModel.aggregate()
      .search({
        index: "autocomplete",
        autocomplete: {
          query: req.query.City,
          path: "City",
          fuzzy: {
            maxEdits: 1,
          },
          tokenOrder: "sequential",
        },
      })
      .project({
        City: 1,
        Country: 1,
        Name: 1,
        IATA: 1,
        ICAO: 1,
      })
      .limit(5);
    console.log(result);
    console.log(req.query.City);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.send([]);
  }
};
