const TileModel = require("../model/tile");
const questionModel = require("../model/questions");

const saveTile = (request, response) => {
  const userInputData = request.body;
  let saveData = {
    tile_name: userInputData.title_name,
    current_form_version_id: userInputData.current_form_version_id,
    site_id: userInputData.site_id,
    site_form_id: userInputData.site_form,
    is_active: userInputData.publish
  };
  TileModel.saveTile(saveData);
  response.json({ status: "200", message: "Saved successfully." });
};

const updateTileByID = (request, response) => {
  const userInputData = request.body;
  let saveData = {
    update_id: userInputData.id,
    tile_name: userInputData.title_name,
    current_form_version_id: userInputData.current_form_version_id,
    site_id: userInputData.site_id,
    site_form_id: userInputData.site_form,
    is_active: userInputData.publish
  };
  TileModel.updateTileByID(saveData);
  response.json({ status: "200", message: "Saved successfully." });
};

const visibiltyTileByID = (request, response) => {
  const id = request.params.tile_id;
  TileModel.getTileByID(id).then(result => {
    const saveData = {
      update_id: id,
      is_active: result.is_active == "1" ? "0" : "1"
    };
    TileModel.updateTileByID(saveData);
  });
  response.json({ status: "200", message: "Saved successfully." });
};

const getTile = (request, response) => {
  TileModel.getTile().then(result => {
    response.json({ status: "200", tile_data: result });
  });
};

const getQuestionByTileID = (request, response) => {
  const userInputData = request.params.tile_id;
  questionModel
    .getQuestionByTileID(userInputData)
    .then(result => response.json({ status: "200", question_data: result }));
};

const getTileByID = (request, response) => {
  const userInputData = request.params.tile_id;
  TileModel.getTileByID(userInputData).then(result =>
    response.json({ status: "200", tile_data: result })
  );
};

const getTileBySiteFormID = (request, response) => {
  const userInputData = request.params.site_form_id;
  TileModel.getTileBySiteFormID(userInputData).then(result =>
    response.json({ status: "200", tile_data: result })
  );
};

const getTileBySiteID = (request, response) => {
  const userInputData = request.params.site_id;
  TileModel.getTileBySiteID(userInputData).then(result =>
    response.json({ status: "200", tile_data: result })
  );
};

module.exports = {
  saveTile,
  getTile,
  getTileByID,
  getTileBySiteID,
  getTileBySiteFormID,
  getQuestionByTileID,
  visibiltyTileByID,
  updateTileByID
};
