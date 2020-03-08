const Sequelize = require("sequelize");
const sequelize = require("../../config/db").formDB;

const Schema = {
  site_id: { type: Sequelize.NUMBER },
  category_name: { type: Sequelize.STRING },
  minimum_age: { type: Sequelize.NUMBER },
  maximum_age: { type: Sequelize.NUMBER },
  gender_target: { type: Sequelize.STRING },
  is_active: { type: Sequelize.ENUM(["0", "1"]) }
};

const PatientCategory = sequelize.define("patient_category", Schema);

module.exports = PatientCategory;
