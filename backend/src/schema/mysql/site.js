const Sequelize = require("sequelize");
const sequelize = require("../../config/db").formDB;

const Schema = {
  site_name: { type: Sequelize.STRING },
  is_active: { type: Sequelize.ENUM(["0", "1"]) }
};

const Tile = sequelize.define("site", Schema);

module.exports = Tile;
