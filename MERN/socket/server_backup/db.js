const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://adarshere:adarshere@divdb.7p3hc.mongodb.net/socketProgramming";
  //mongodb+srv://<username>:<password>@<clusterName>.7p3hc.mongodb.net/<databaseName>

const connectToMongo = async function () {
  try {
    await mongoose.connect(mongoURI, {
    });
    console.log("Hurray !! Connected to MongoDB");
  } catch (error) {
    console.error("Oh No !! Failed to connect to MongoDB:", error.message);
  }
};

module.exports = connectToMongo;