const mongoose = require("mongoose");
const getOpenEyeDataModle = require("../model/openEyeDataRecieved");
const encryption = require("./encryption");
const tokenValidation = require("./tokenValidation");
const _ = require("lodash");
var Base64 = require("js-base64").Base64;

mongoose.set("useUnifiedTopology", true);

const getTestDataFromDB = (request, response) => {
  getOpenEyeDataModle
    .getDataFromDB(request.params.nhs_num)
    .then(userData => {
      console.log(userData);
      response.json({ data: userData.received, status: "200" });
    })
    .catch(errorMessage => {
      response.json({ message: "No NHS Number Found.", status: "404" });
    });
};

const getDataFromDB = (request, response) => {
  getOpenEyeDataModle
    .getDataFromDB(request.params.nhs_num)
    .then(userData => {
      response.json({
        data: generateCypherfromPatientData(userData.received),
        status: "200"
      });
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
  const receivedData = request.body.data;
  const patientData = generatePatientDataFromCypher(receivedData);
  if (patientData) {
    console.log(patientData);
    getOpenEyeDataModle.saveJson(patientData);
    response.json({ statu: "200", message: "successfully saved" });
  } else {
    response.json({ statu: "404", message: "Data recieved is invalid." });
  }
};

const generatePatientDataFromCypher = data => {
  const decipherData = encryption.decipherThisString(data);
  console.log(decipherData)
  try {
    tokenValidation.verifyToke(decipherData);
    const payLoadData = decipherData.split(".")[1];
    return JSON.parse(Base64.decode(payLoadData));
  } catch {
    return false;
  }
};

const generateCypherfromPatientData = data => {
  try {
    const generatedToken = tokenValidation.generateToke(data);
    const dataToBeEncrypted = {
      token: generatedToken,
      userData: data
    };
    return encryption.cipherThisString(JSON.stringify(dataToBeEncrypted));
  } catch {
    new Error();
  }
};

module.exports = {
  getDataFromDB,
  getAllDataFromDB,
  getTestDataFromDB,
  saveJson
};
