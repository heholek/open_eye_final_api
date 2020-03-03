const mongoose = require("mongoose");
const getOpenEyeDataModle = require("../../model/openeye_patient_data/getOpenEyeData");
const _ = require("lodash");

mongoose.set("useUnifiedTopology", true);

const getDataFromDB = (request, response) => {
  let responseSend = false;

  getOpenEyeDataModle
    .getDataFromDB(request.params.nhs_num)
    .then(userData => {
      response.send(JSON.stringify({ data: userData.received, status: "200" }));
    })
    .catch(errorMessage => {
      response.send(
        JSON.stringify({ message: "No NHS Number Found.", status: "404" })
      );
    });
};

const getAllDataFromDB = (request, response) => {
  let responseSend = false;
  console.log("11");
  getOpenEyeDataModle
    .getAllDataFromDB()
    .then(userData => {
      console.log(userData);
      response.send(JSON.stringify({ data: userData, status: "200" }));
    })
    .catch(errorMessage => {
      response.send(
        JSON.stringify({ message: "No NHS Number Found.", status: "404" })
      );
    });
};

module.exports = {
  getDataFromDB,
  getAllDataFromDB
};
