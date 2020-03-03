const formQuestionsDataDB = require("../../config/mongodb")
  .formQuestionsData_db;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const responseSchema = new Schema({
  received: {
    type: Object,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("openeye_response_received", responseSchema);
