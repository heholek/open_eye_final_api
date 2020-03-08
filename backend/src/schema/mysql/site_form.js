const Sequelize = require("sequelize");
const sequelize = require("../../config/db").formDB;

const Schema = {
  site_id: { type: Sequelize.NUMBER },
  form_name: { type: Sequelize.STRING },
  edit_staff_id: { type: Sequelize.STRING },
  view_staff_id: { type: Sequelize.STRING },
  form_version_number: { type: Sequelize.NUMBER },
  is_active: { type: Sequelize.ENUM(["0", "1"]) }
};

module.exports = sequelize.define("site_form", Schema);
