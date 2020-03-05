const mongoose = require("mongoose");
const getOpenEyeDataModle = require("../model/openEyeDataRecieved");
const _ = require("lodash");

mongoose.set("useUnifiedTopology", true);

const getDataFromDB = (request, response) => {
  getOpenEyeDataModle
    .getDataFromDB(request.params.nhs_num)
    .then(userData => {
      response.json({ data: userData.received, status: "200" });
    })
    .catch(errorMessage => {
      response.json({ message: "No NHS Number Found.", status: "404" });
    });
};

const getAllDataFromDB = (request, response) => {
  getOpenEyeDataModle
    .getAllDataFromDB()
    .then(userData => {
      response.json({ data: userData, status: "200" });
    })
    .catch(errorMessage => {
      response.json({ message: "No NHS Number Found.", status: "404" });
    });
};

const saveJson = (request, response) => {
  getOpenEyeDataModle.saveJson(request.body);
  response.json({ statu: "200", message: "successfully saved" });
};

module.exports = {
  getDataFromDB,
  getAllDataFromDB,
  saveJson
};
