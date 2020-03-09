const mongoose = require("mongoose");
mongoose.set("useUnifiedTopology", true);

const patientRecievedData_db = mongoose.createConnection(
  // "mongodb://localhost:27017/openeyes?authSource=admin",
  "mongodb://localhost:27017/openeyes",
  // {
  //   auth: {
  //     authSource: "admin"
  //   },
  //   user: "root",
  //   pass: "Openeye@132#$"
  // }
);

const formQuestionsData_db = mongoose.createConnection(
  // "mongodb://localhost:27017/open_eye?authSource=admin",
  "mongodb://localhost:27017/open_eye",
  // {
  //   auth: {
  //     authSource: "admin"
  //   },
  //   user: "root",
  //   pass: "Openeye@132#$"
  // }
);

module.exports = {
  patientRecievedData_db,
  formQuestionsData_db
};
