const express = require("express");
const routes = express.Router();

const {
  saveQuestion,
  getQuestion,
  getQuestionByID,
  getChildQuestionByID,
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

const { saveSiteForm, getStieForm } = require("./constroller/site_form");

const {
  saveSiteStaffRoles,
  getSiteStaffRoles,
  getSiteStaffRolesByID
} = require("./constroller/site_staf_role");

const {
  saveSiteUsers,
  getStieUsers,
  getSiteUsersByID
} = require("./constroller/site_user");

routes.get("/question/form/input_types", getQuestionFormInputType);

routes.post("/question/save", saveQuestion);
routes.get("/question/list", getQuestion);
routes.get("/question/:question_id/:child_question_id", getChildQuestionByID);
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

routes.post("/site/form/save", saveSiteForm);
routes.get("/site/form/list", getStieForm);

routes.post("/site/users/save", saveSiteUsers);
routes.get("/site/users/list", getStieUsers);
routes.get("/site/users/:site_user_id", getSiteUsersByID);

routes.post("/site/users/save", saveSiteUsers);
routes.get("/site/users/list", getStieUsers);
routes.get("/site/users/:site_user_id", getSiteUsersByID);

routes.post("/site/role/save", saveSiteStaffRoles);
routes.get("/site/role/list", getSiteStaffRoles);
routes.get("/site/role/:siteID", getSiteStaffRolesByID);

routes.post("/patient_category/save", savePatientCategory);
routes.get("/patient_category/list", getPatientCategory);
routes.get("/patient_category/:patient_category_id", getPatientCategoryByID);
// routes.put("/patient_category/:patient_category_id", putPatientCategoryByID);

module.exports = routes;
