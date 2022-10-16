import { Schema, model, models } from "mongoose";

const citySchema = new Schema({
  "Airport ID": String,
  Name: String,
  City: String,
  Country: String,
  IATA: String,
  ICAO: String,
  Latitude: String,
  Longitude: String,
  Altitude: String,
  Timezone: String,
  DST: String,
  "Tz database time zone": String,
  Type: String,
  Source: String,
});

const CityModel = models.airports || model("airports", citySchema, "test");

export default CityModel;
