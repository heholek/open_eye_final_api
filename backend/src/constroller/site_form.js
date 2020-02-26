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

const updateSiteForm = (request, response) => {
  const userInputData = request.body;
  let saveData = {
    update_id: userInputData.id,
    form_name: userInputData.site_form_name,
    current_form_version_id: userInputData.current_form_version_id,
    view_staff_id: _.join(userInputData.readOnlyStaff, ","),
    edit_staff_id: _.join(userInputData.readWriteStaff, ","),
    site_id: userInputData.site_id,
    is_active: userInputData.publish
  };
  SiteFormModel.updateSiteForm(saveData);
  response.json({ status: "200", message: "Saved successfully." });
};

const getSiteFormBySiteFormID = (request, response) => {
  const userInputData = request.params.siteFormID;
  SiteFormModel.getSiteFormBySiteFormID(userInputData).then(result =>
    response.json({ status: "200", site_form_list: result })
  );
};

const getStieForm = (request, response) => {
  SiteFormModel.getStieForm().then(result => {
    response.json({ status: "200", site_form_list: result });
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
  getSiteFormBySiteID,
  getSiteFormBySiteFormID,
  updateSiteForm
};
