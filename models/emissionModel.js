import { Schema, model, models } from "mongoose";

const emissionSchema = new Schema({
  LOCATION: String,
  Country: String,
  POLLUTANT: String,
  Pollutant: String,
  MEASURE: String,
  Measure: String,
  FLIGHT: String,
  "Flight type": String,
  FREQUENCY: String,
  Frequency: String,
  SOURCE: String,
  "Source of emissions": String,
  SEASONALITY: String,
  Seasonality: String,
  TIME: String,
  Time: String,
  Value: String,
});

const EmissionModel = models.emissions || model("emissions", emissionSchema);

export default EmissionModel;
