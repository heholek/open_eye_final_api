const express = require("express");
const routes = express.Router();

const {
  saveQuestion,
  updateQuestion,
  getQuestion,
  getQuestionByID,
  getQuestionBySiteID,
  getQuestionBySiteFormID,
  getQuestionByformTileID,
  getChildQuestionByID,
  getQuestionFormInputType
} = require("../constroller/questions");

routes.post("/save", saveQuestion);
routes.post("/update", updateQuestion);
routes.get("/list", getQuestion);
routes.get("/form/input_types", getQuestionFormInputType);
routes.get("/site/:siteID", getQuestionBySiteID);
routes.get("/form/:siteFormID", getQuestionBySiteFormID);
routes.get("/tile/:formTileID", getQuestionByformTileID);
routes.get("/:question_id", getQuestionByID);
routes.get("/:question_id/:child_question_id", getChildQuestionByID);

module.exports = routes;
