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
} = require("./constroller/questions");

const {
  saveTile,
  getTile,
  getQuestionByTileID,
  getTileByID,
  getTileBySiteID,
  getTileBySiteFormID,
  updateTileByID,
  visibiltyTileByID
} = require("./constroller/tile");

const {
  savePatientCategory,
  getPatientCategory,
  getPatientCategoryByID,
  getPatientCategoryByPatientCategoryID,
  updatePatientCategory,
  visibiltyPatientCategory
} = require("./constroller/patient_category");

const {
  saveSite,
  getStie,
  getSiteByID,
  visibiltySiteByID,
  updateSiteByID
} = require("./constroller/site");

const {
  saveSiteForm,
  updateSiteForm,
  getSiteFormBySiteFormID,
  getStieForm,
  getSiteFormBySiteID,
  visibiltySiteFormBySiteID
} = require("./constroller/site_form");

const {
  saveSiteStaffRoles,
  updateSiteStaffRoles,
  getSiteStaffRoles,
  getSiteStaffRolesByID,
  getSiteStaffRolesByStaffID,
  visibiltySiteStaffRolesByStaffID
} = require("./constroller/site_staf_role");

const ReceivedPatientData = require("./routes/patient_data");

// const {
//   saveSiteUsers,
//   getStieUsers,
//   getSiteUsersByID
// } = require("./constroller/site_user");

// routes.use("/open_eye", ReceivedPatientData);

routes.get("/question/form/input_types", getQuestionFormInputType);

routes.post("/question/save", saveQuestion);
routes.post("/question/update", updateQuestion);
routes.get("/question/list", getQuestion);
routes.get("/question/site/:siteID", getQuestionBySiteID);
routes.get("/question/form/:siteFormID", getQuestionBySiteFormID);
routes.get("/question/tile/:formTileID", getQuestionByformTileID);
routes.get("/question/:question_id", getQuestionByID);
routes.get("/question/:question_id/:child_question_id", getChildQuestionByID);

routes.post("/tile/save", saveTile);
routes.get("/tile/list", getTile);
routes.get("/tile/question/:tile_id", getQuestionByTileID);

routes.get("/tile/stie/:site_id", getTileBySiteID);
routes.get("/tile/form/:site_form_id", getTileBySiteFormID);
routes.get("/tile/:tile_id", getTileByID);

routes.post("/tile/update", updateTileByID);
routes.get("/tile/visibilty/:tile_id", visibiltyTileByID);

routes.post("/site/save", saveSite);
routes.post("/site/update", updateSiteByID);
routes.get("/site/list", getStie);
routes.get("/site/:site_id", getSiteByID);
routes.get("/site/visibilty/:site_id", visibiltySiteByID);

routes.post("/site/form/save", saveSiteForm);
routes.post("/site/form/update", updateSiteForm);
routes.get("/site/form/get/:siteFormID", getSiteFormBySiteFormID);
routes.get("/site/form/list", getStieForm);
routes.get("/site/form/:site_id", getSiteFormBySiteID);
routes.get("/site/form/visibilty/:siteFormID", visibiltySiteFormBySiteID);

// routes.post("/site/users/save", saveSiteUsers);
// routes.get("/site/users/list", getStieUsers);
// routes.get("/site/users/:site_user_id", getSiteUsersByID);
// routes.get("/site/users/visibilty/:site_id", visibiltySiteUsersByID);

routes.post("/site/role/save", saveSiteStaffRoles);
routes.post("/site/role/update", updateSiteStaffRoles);
routes.get("/site/role/list", getSiteStaffRoles);
routes.get("/site/role/get/:siteStaffID", getSiteStaffRolesByStaffID);
routes.get(
  "/site/role/visibilty/:siteStaffID",
  visibiltySiteStaffRolesByStaffID
);
routes.get("/site/role/:siteID", getSiteStaffRolesByID);

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
routes.get(
  "/patient_category/visibilty/:patient_category_id",
  visibiltyPatientCategory
);

module.exports = routes;