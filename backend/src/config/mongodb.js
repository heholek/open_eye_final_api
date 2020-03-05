const mongoose = require("mongoose");
mongoose.set("useUnifiedTopology", true);

const patientRecievedData_db = mongoose.createConnection(
  "mongodb://localhost:27017/openeyes",
  {
    useNewUrlParser: true
  }
);

const formQuestionsData_db = mongoose.createConnection(
  "mongodb://localhost:27017/open_eye",
  {
    useNewUrlParser: true
  }
);

module.exports = {
  patientRecievedData_db,
  formQuestionsData_db
};
