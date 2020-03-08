const express = require("express");
const routes = express.Router();

const {
  saveSiteStaffRoles,
  updateSiteStaffRoles,
  getSiteStaffRoles,
  getSiteStaffRolesByID,
  getSiteStaffRolesByStaffID,
  visibiltySiteStaffRolesByStaffID
} = require("../../constroller/site_staf_role");

routes.post("/save", saveSiteStaffRoles);
routes.post("/update", updateSiteStaffRoles);
routes.get("/list", getSiteStaffRoles);
routes.get("/get/:siteStaffID", getSiteStaffRolesByStaffID);
routes.get("/visibilty/:siteStaffID", visibiltySiteStaffRolesByStaffID);
routes.get("/:siteID", getSiteStaffRolesByID);

module.exports = routes;
