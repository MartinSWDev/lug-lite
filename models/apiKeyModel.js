import { Schema, model, models } from "mongoose";

const apiKeySchema = new Schema({
  token_type: String,
  expires_in: String,
  ext_expires_in: String,
  expires_on: String,
  not_before: String,
  resource: String,
  access_token: String,
});

const ApiKeyModel =
  models.chooose || model("chooose", apiKeySchema, "lug-lite");

export default ApiKeyModel;
