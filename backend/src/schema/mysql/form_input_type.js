const Sequelize = require("sequelize");
const sequelize = require("../../config/db").formDB;

const Schema = {
  input_name: { type: Sequelize.STRING },
  input_type: { type: Sequelize.STRING },
  is_active: { type: Sequelize.ENUM(["0", "1"]) }
};

const FormInputType = sequelize.define("form_input_type", Schema);

module.exports = FormInputType;
