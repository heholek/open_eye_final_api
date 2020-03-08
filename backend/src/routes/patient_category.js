const express = require("express");
const routes = express.Router();

const {
  savePatientCategory,
  getPatientCategory,
  getPatientCategoryByID,
  getPatientCategoryByPatientCategoryID,
  updatePatientCategory,
  visibiltyPatientCategory
} = require("../constroller/patient_category");

routes.post("/save", savePatientCategory);
routes.post("/update", updatePatientCategory);
routes.get("/list", getPatientCategory);
routes.get("/site/:patient_category_id", getPatientCategoryByID);
routes.get("/:patient_category_id", getPatientCategoryByPatientCategoryID);
routes.get("/visibilty/:patient_category_id", visibiltyPatientCategory);

module.exports = routes;
