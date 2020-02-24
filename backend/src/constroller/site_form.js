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
  SiteFormModel.saveSiteForm(saveData);
  response.json({ status: "200", message: "Saved successfully." });
};

const getStieForm = (request, response) => {
  SiteFormModel.getStieForm().then(result => {
    response.json({ status: "200", tile_data: result });
  });
};

const getSiteFormBySiteID = (request, response) => {
  const userInputData = request.params.site_id;
  SiteFormModel.getSiteFormBySiteID(userInputData).then(result =>
    response.json({ status: "200", site_form_list: result })
  );
};

module.exports = {
  saveSiteForm,
  getStieForm,
  getSiteFormBySiteID
};
