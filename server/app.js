const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const collectionRoute = require("./routes").collection;
// const corsOptions = {
//   // origin: "https://opensea-client.onrender.com",
//   origin: "http://localhost:3000",
// };

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    console.log("Connect to Mongo Altas");
  })
  .catch((e) => {
    console.log(e);
  });
app.use(cors());

app.use("/", collectionRoute);

app.listen(8080, () => {
  console.log("Server running on port 8080.");
});
