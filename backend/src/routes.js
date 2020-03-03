const express = require("express");
const routes = express.Router();

const QuestionsRoute = require("./routes/question");
const SitesRoute = require("./routes/site");
const TileRoute = require("./routes/tile");
const PatientDataRoute = require("./routes/patient_data");
const PatientCategoryRoute = require("./routes/patient_category");

// const {
//   saveSiteUsers,
//   getStieUsers,
//   getSiteUsersByID
// } = require("./constroller/site_user");

routes.use("/question", QuestionsRoute);
routes.use("/site", SitesRoute);
routes.use("/tile", TileRoute);
routes.use("/patient_data", PatientDataRoute);
routes.use("/patient_category", PatientCategoryRoute);

module.exports = routes;
