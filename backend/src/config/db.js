const Sequelize = require("sequelize");

const formDB = new Sequelize("open_eye_db", "openeye1", "Openeye1@#$21", {
  host: "localhost",
  dialect: "mysql"
  // timezone: "Asia/Kolkata"
});

const userResponse = new Sequelize(
  "open_eye_answers_db",
  "openeye2",
  "Openeye2@32!$",
  {
    host: "localhost",
    dialect: "mysql"
    // timezone: "Asia/Kolkata"
  }
);

module.exports = {
  formDB,
  userResponse
};
