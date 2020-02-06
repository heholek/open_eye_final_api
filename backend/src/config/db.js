const Sequelize = require("sequelize");

const formDB = new Sequelize("open_eye_db", "root", "", {
  host: "localhost",
  dialect: "mysql"
  // timezone: "Asia/Kolkata"
});

const userResponse = new Sequelize("open_eye_answers_db", "root", "", {
  host: "localhost",
  dialect: "mysql"
  // timezone: "Asia/Kolkata"
});

module.exports = {
  formDB,
  userResponse
};
