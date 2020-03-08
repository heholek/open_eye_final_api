const express = require("express");
const routes = express.Router();

const QuestionsRoute = require("./routes/question");
const SitesRoute = require("./routes/site");
const TileRoute = require("./routes/tile");
const PatientDataRoute = require("./routes/patient_data");
const PatientCategoryRoute = require("./routes/patient_category");
const Siteuser = require("./routes/site_user");

const ValidateToken = require("./constroller/api_token_validation");
const Encryption = require("./constroller/encryption");

routes.use("/question", QuestionsRoute);
routes.use("/site", SitesRoute);
routes.use("/tile", TileRoute);
routes.use("/patient_data", PatientDataRoute);
routes.use("/patient_category", PatientCategoryRoute);
routes.use("/user", Siteuser);

// routes.use("/validate/token", ValidateToken.generateToken);
// routes.use("/validate/test", ValidateToken.getDataFromToken);

// routes.use("/cipher/generate", Encryption.generateCipher);
// routes.use("/cipher/degenerate", Encryption.deCipher);

module.exports = routes;
