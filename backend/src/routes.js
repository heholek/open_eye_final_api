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
  getTileBySiteID,
  getTileBySiteFormID
} = require("./constroller/tile");

const {
  savePatientCategory,
  getPatientCategory,
  getPatientCategoryByID,
  getPatientCategoryByPatientCategoryID,
  updatePatientCategory
} = require("./constroller/patient_category");

const {
  saveSite,
  getStie,
  getSiteByID,
  updateSiteByID
} = require("./constroller/site");

const {
  saveSiteForm,
  updateSiteForm,
  getSiteFormBySiteFormID,
  getStieForm,
  getSiteFormBySiteID
} = require("./constroller/site_form");

const {
  saveSiteStaffRoles,
  updateSiteStaffRoles,
  getSiteStaffRoles,
  getSiteStaffRolesByID,
  getSiteStaffRolesByStaffID
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

routes.get("/tile/stie/:site_id", getTileBySiteID);
routes.get("/tile/form/:site_form_id", getTileBySiteFormID);
routes.get("/tile/:tile_id", getTileByID);

// routes.put("/tile/:tile_id", updateTileByID);

routes.post("/site/save", saveSite);
routes.post("/site/update", updateSiteByID);
routes.get("/site/list", getStie);
routes.get("/site/:site_id", getSiteByID);

routes.post("/site/form/save", saveSiteForm);
routes.post("/site/form/update", updateSiteForm);
routes.get("/site/form/get/:siteFormID", getSiteFormBySiteFormID);
routes.get("/site/form/list", getStieForm);
routes.get("/site/form/:site_id", getSiteFormBySiteID);

routes.post("/site/users/save", saveSiteUsers);
routes.get("/site/users/list", getStieUsers);
routes.get("/site/users/:site_user_id", getSiteUsersByID);

// routes.post("/site/users/save", saveSiteUsers);
// routes.get("/site/users/list", getStieUsers);
// routes.get("/site/users/:site_user_id", getSiteUsersByID);

routes.post("/site/role/save", saveSiteStaffRoles);
routes.post("/site/role/update", updateSiteStaffRoles);
routes.get("/site/role/list", getSiteStaffRoles);
routes.get("/site/role/:siteID", getSiteStaffRolesByID);
routes.get("/site/role/get/:siteStaffID", getSiteStaffRolesByStaffID);

routes.post("/patient_category/save", savePatientCategory);
routes.post("/patient_category/update", updatePatientCategory);
routes.get("/patient_category/list", getPatientCategory);
routes.get(
  "/patient_category/site/:patient_category_id",
  getPatientCategoryByID
);
routes.get(
  "/patient_category/:patient_category_id",
  getPatientCategoryByPatientCategoryID
);

module.exports = routes;
