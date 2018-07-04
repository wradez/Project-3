const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GearSchema = new Schema({
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
    },
    quantity_needed: {
      type: Number,
      required: true,
      min: [1, 'please enter a quantity']
    },
    quantity_actual: {
      type: Number
    }
    //Admin and user connecting
  });
  
  // Create the Headline model using the headlineSchema
  const Gear = mongoose.model("Gear", GearSchema);
  
  // Export the Headline model
  module.exports = Gear;