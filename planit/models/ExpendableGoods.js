const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ExpendableGoodsSchema = new Schema({
  Title: {
    type: String,
    required: true,
    
  },
  // summary, a string, must be entered
  summary: {
    type: String,
    required: true
  },
  // url, a string, must be entered
  url: {
    type: String,
    required: true
  },
  // date is just a string
  date: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    default: false
  }
});

// Create the Headline model using the headlineSchema
const ExpendableGoods = mongoose.model("ExpendableGoods", ExpendableGoodsSchema);

// Export the Headline model
module.exports = ExpendableGoods;
