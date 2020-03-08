const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const { patientRecievedData_db } = require("../../config/mongodb");

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

module.exports = patientRecievedData_db.model(
  "openeye_response_received",
  responseSchema
);
