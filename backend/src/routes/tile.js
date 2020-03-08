const express = require("express");
const routes = express.Router();

const {
  saveTile,
  getTile,
  getQuestionByTileID,
  getTileByID,
  getTileBySiteID,
  getTileBySiteFormID,
  updateTileByID,
  visibiltyTileByID
} = require("../constroller/tile");

routes.post("/save", saveTile);
routes.get("/list", getTile);
routes.get("/question/:tile_id", getQuestionByTileID);

routes.get("/stie/:site_id", getTileBySiteID);
routes.get("/form/:site_form_id", getTileBySiteFormID);
routes.get("/:tile_id", getTileByID);

routes.post("/update", updateTileByID);
routes.get("/visibilty/:tile_id", visibiltyTileByID);

module.exports = routes;
