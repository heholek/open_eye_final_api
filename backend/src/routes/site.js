const express = require("express");
const routes = express.Router();

const SiteForm = require("./site/form");
const SiteRoles = require("./site/role");

const {
  saveSite,
  getStie,
  getSiteByID,
  visibiltySiteByID,
  updateSiteByID
} = require("../constroller/site");

routes.post("/save", saveSite);
routes.post("/update", updateSiteByID);
routes.get("/list", getStie);
routes.get("/:site_id", getSiteByID);
routes.get("/visibilty/:site_id", visibiltySiteByID);

routes.use("/form", SiteForm);
routes.use("/role", SiteRoles);

module.exports = routes;
