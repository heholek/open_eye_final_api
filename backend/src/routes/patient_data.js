const express = require("express");
const routes = express.Router();

const {
  saveJson,
  getAllDataFromDB,
  getDataFromDB,
  getTestDataFromDB,
  saveTestJson
} = require("../constroller/openEyeDataRecieved");

routes.post("/openeyedata", saveJson);
routes.get("/getdata", getAllDataFromDB);
routes.get("/getdata/:nhs_num", getDataFromDB);

// testing only
routes.get("/get_test_data/:nhs_num", getTestDataFromDB);
routes.post("/openeyedata/test_save", saveTestJson);

module.exports = routes;
