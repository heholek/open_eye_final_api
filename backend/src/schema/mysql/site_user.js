const Sequelize = require("sequelize");
const sequelize = require("../../config/db").formDB;

const Schema = {
  user_id: { type: Sequelize.NUMBER },
  site_id: { type: Sequelize.NUMBER },
  user_role_name: { type: Sequelize.STRING },
  is_active: { type: Sequelize.ENUM(["0", "1"]) }
};

module.exports = sequelize.define("site_user", Schema);
