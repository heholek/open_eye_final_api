const Sequelize = require("sequelize");
const sequelize = require("../../config/db").formDB;

const Schema = {
  site_id: { type: Sequelize.STRING },
  role_name: { type: Sequelize.STRING },
  is_active: { type: Sequelize.ENUM(["0", "1"]) }
};

module.exports = sequelize.define("site_role", Schema);
