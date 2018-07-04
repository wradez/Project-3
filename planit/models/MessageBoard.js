const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageBoardSchema = new Schema({
  comments: {
    type: Text
  }
  //Admin and user connecting
});

// Create the Headline model using the headlineSchema
const MessageBoard = mongoose.model("MessageBoard", MessageBoardSchema);

// Export the Headline model
module.exports = MessageBoard;