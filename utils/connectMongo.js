import mongoose from "mongoose";

const connectMongo = async () => {
  return mongoose.connect(process.env.MONGO_URI);
};

export default connectMongo;
