const mongoose = require("mongoose");

const connectionString = process.env.ATLAS_DATABASE_URL;

mongoose.connect(connectionString, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected!");
});

module.exports = db;
