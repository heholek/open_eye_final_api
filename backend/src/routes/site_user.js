const { saveSiteUsers, getStieUsersByToken, viewTestData } = require("../constroller/site_user");

const express = require("express");
const routes = express.Router();

routes.post("/save", saveSiteUsers);
routes.post("/get", getStieUsersByToken);
routes.post("/view_test_data", viewTestData);

module.exports = routes;
