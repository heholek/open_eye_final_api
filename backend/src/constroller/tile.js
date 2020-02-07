const tileMode = require("../model/tile");

const saveTile = (request, response) => {
  const userInputData = request.body;
  let saveData = {
    tile_name: userInputData.title_name,
    current_form_version_id: userInputData.current_form_version_id,
    site_id: userInputData.site_id,
    is_active: userInputData.publish
  };
  tileMode.saveTile(saveData);
  response.json({ status: "200", message: "Saved successfully." });
};

const getTile = (request, response) => {
  tileMode.getTile().then(result => {
    response.json({ status: "200", tile_data: result });
  });
};

module.exports = {
  saveTile,
  getTile
};
