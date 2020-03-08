const mongoose = require("mongoose");
mongoose.set("useUnifiedTopology", true);

const patientRecievedData_db = mongoose.createConnection(
  // "mongodb://localhost:27017/openeyes?authSource=admin",
  "mongodb://root:Openeye@132#$@localhost:27017/openeyes?authSource=admin",
  {
    useNewUrlParser: true
  }
);

const formQuestionsData_db = mongoose.createConnection(
  // "mongodb://localhost:27017/open_eye?authSource=admin",
  "mongodb://root:Openeye@132#$@localhost:27017/open_eye?authSource=admin",
  {
    useNewUrlParser: true
  }
);

module.exports = {
  patientRecievedData_db,
  formQuestionsData_db
};
