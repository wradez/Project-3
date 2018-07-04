const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OtherSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  comments: {
    type: String
  },
 completed: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number,
  },
  quantity_needed: {
    type: Number,
    min: [1, 'please enter a quantity']
  },
  quantity_actual: {
    type: Number
  }
  //Admin and user connecting
});

// Create the Headline model using the headlineSchema
const Other = mongoose.model("Other", OtherSchema);

// Export the Headline model
module.exports = Other;