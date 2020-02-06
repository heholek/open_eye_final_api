const Sequelize = require("sequelize");
const sequelize = require("../../config/db").formDB;

const Schema = {
  tile_name: { type: Sequelize.STRING },
  current_form_version_id: { type: Sequelize.NUMBER },
  site_id: { type: Sequelize.NUMBER },
  is_active: { type: Sequelize.ENUM, values: ["0", "1"] }
};

const Tile = sequelize.define("tile", Schema);

module.exports = Tile;
