const express = require("express");
const routes = express.Router();

const {
  saveJson,
  getAllDataFromDB,
  getDataFromDB
} = require("../constroller/openEyeDataRecieved");

routes.post("/openeyedata", saveJson);
routes.get("/getdata", getAllDataFromDB);
routes.get("/getdata/:nhs_num", getDataFromDB);
routes.get("/get_test_data/:nhs_num", getTestDataFromDB);

module.exports = routes;
