const mongoose = require("mongoose");
const connectDB = require("../connect/mongodb").db;
const jsonResponseModle = require("../model/JsonResponse").jsonResponseModle;

mongoose.set("useUnifiedTopology", true);

const setJsonData = (request, response) => {
  let saveData = new jsonResponseModle();

  saveData.received = request.body;
  saveData.save();

  response.json({ statu: "200", message: "successfully saved" });
};

module.exports = {
  setJsonData
};
