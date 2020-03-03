const express = require("express");
const routes = express.Router();

const {
  //   SaveJson,
  getAllDataFromDB,
  getDataFromDB
} = require("../constroller/openeye_patient_data/getOpenEyeData");

// routes.post("/openeyedata", SaveJson);
routes.get("/getdata", getAllDataFromDB);
routes.get("/getdata/:nhs_num", getDataFromDB);

module.exports = routes;
