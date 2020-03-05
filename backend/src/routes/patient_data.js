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

module.exports = routes;
