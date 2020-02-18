const express = require("express");
const routes = express.Router();
const {
  saveQuestion,
  getQuestion,
  getQuestionByID,
  getQuestionFormInputType
} = require("./constroller/questions");
const {
  saveTile,
  getTile,
  getQuestionByTileID,
  getTileByID,
  getTileBySiteID
} = require("./constroller/tile");
const {
  savePatientCategory,
  getPatientCategory,
  getPatientCategoryByID
} = require("./constroller/patient_category");
const { saveSite, getStie, getSiteByID } = require("./constroller/site");

routes.post("/question/save", saveQuestion);
routes.get("/question/list", getQuestion);
routes.get("/question/:question_id", getQuestionByID);
// routes.put("/question/:question_id", updateQuestionByID)

routes.post("/tile/save", saveTile);
routes.get("/tile/list", getTile);
routes.get("/tile/question/:tile_id", getQuestionByTileID);
routes.get("/tile/:tile_id", getTileByID);
routes.get("/tile/stie/:site_id", getTileBySiteID);
// routes.put("/tile/:tile_id", updateTileByID);

routes.post("/site/save", saveSite);
routes.get("/site/list", getStie);
routes.get("/site/:site_id", getSiteByID);
// routes.put("/site/:site_id", putSiteByID);

routes.post("/patient_category/save", savePatientCategory);
routes.get("/patient_category/list", getPatientCategory);
routes.get("/patient_category/:patient_category_id", getPatientCategoryByID);
// routes.put("/patient_category/:patient_category_id", putPatientCategoryByID);

routes.get("/question_form/input_types", getQuestionFormInputType);

module.exports = routes;
