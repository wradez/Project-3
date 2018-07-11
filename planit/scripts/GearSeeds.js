const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect((process.env.MONGODB_URI ||"mongodb://localhost:27017/planitdb"), { useNewUrlParser: true });

const GearSeed = [
  {
    title: "test0.0",
    comments: "J-Dawg",
    quantity_needed: 10,
    quantity_actual: 5
  },
  {
    title: "test0.1",
    comments: "Justin",
    quantity_needed: 8,
    quantity_actual: 1
  }
];

db.Gear
  .remove({})
  .then(() => db.Gear.collection.insertMany(GearSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

console.log('GearSeeds.js has been called');