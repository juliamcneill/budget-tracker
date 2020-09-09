const mongoose = require("mongoose");
const connectionString = process.env.ATLAS_DATABASE_URL;

mongoose.connect(connectionString);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error!"));
db.once("open", () => {
  console.log("Connected!");
});

module.exports = db;
