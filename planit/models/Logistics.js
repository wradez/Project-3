const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogisticsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
  },
 completed: {
    type: Boolean,
    default: false
  }
  //Admin and user connecting
});

// Create the Headline model using the headlineSchema
const Logistics = mongoose.model("Logistics", LogisticsSchema);

// Export the Headline model
module.exports = Logistics;