const SiteFormModel = require("../model/site_form");
const _ = require("lodash");

const saveSiteForm = (request, response) => {
  const userInputData = request.body;
  let saveData = {
    form_name: userInputData.site_form_name,
    current_form_version_id: userInputData.current_form_version_id,
    view_staff_id: _.join(userInputData.readOnlyStaff, ","),
    edit_staff_id: _.join(userInputData.readWriteStaff, ","),
    site_id: userInputData.site_id,
    is_active: userInputData.publish
  };
  console.log(saveData);
  SiteFormModel.saveSiteForm(saveData);
  response.json({ status: "200", message: "Saved successfully." });
};

const getStieForm = (request, response) => {
  SiteFormModel.getStieForm().then(result => {
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
  SiteFormModel.getTileByID(userInputData).then(result =>
    response.json({ status: "200", tile_data: result })
  );
};

const getTileBySiteID = (request, response) => {
  const userInputData = request.params.site_id;
  SiteFormModel.getTileBySiteID(userInputData).then(result =>
    response.json({ status: "200", tile_data: result })
  );
};

module.exports = {
  saveSiteForm,
  getStieForm
};
