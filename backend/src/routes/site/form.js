const express = require("express");
const routes = express.Router();
const {
  saveSiteForm,
  updateSiteForm,
  getSiteFormBySiteFormID,
  getStieForm,
  getSiteFormBySiteID,
  visibiltySiteFormBySiteID
} = require("../../constroller/site_form");

routes.post("/save", saveSiteForm);
routes.post("/update", updateSiteForm);
routes.get("/get/:siteFormID", getSiteFormBySiteFormID);
routes.get("/list", getStieForm);
routes.get("/:site_id", getSiteFormBySiteID);
routes.get("/visibilty/:siteFormID", visibiltySiteFormBySiteID);

module.exports = routes;
