const Sequelize = require("sequelize");
const sequelize = require("../../config/db").formDB;

const Schema = {
  user_name: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  site_id: { type: Sequelize.NUMBER },
  staff_role: { type: Sequelize.STRING },
  user_validation_token: { type: Sequelize.STRING },
  is_active: { type: Sequelize.ENUM(["0", "1"]) }
};

module.exports = sequelize.define("site_user", Schema);
