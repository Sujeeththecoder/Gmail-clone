import mongoose from "mongoose";
const Connection = () => {
  const DB_URI =
    "mongodb://user:Pichipuka@ac-mycjpkf-shard-00-00.il8f894.mongodb.net:27017,ac-mycjpkf-shard-00-01.il8f894.mongodb.net:27017,ac-mycjpkf-shard-00-02.il8f894.mongodb.net:27017/?ssl=true&replicaSet=atlas-vpf763-shard-0&authSource=admin&retryWrites=true&w=majority";
  try {
    mongoose.connect(DB_URI);
    console.log("Db connected");
  } catch (error) {
    console.log("Error while connecting to the DB", error.message);
  }
};
export default Connection;