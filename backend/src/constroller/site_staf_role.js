const SiteStaffRoleModel = require("../model/site_staf_role");

const saveSiteStaffRoles = (request, response) => {
  const userInputData = request.body;
  let saveData = {
    site_id: userInputData.site_id,
    role_name: userInputData.staff_role_name,
    is_active: userInputData.publish
  };
  SiteStaffRoleModel.saveSiteStaffRoles(saveData);
  response.json({ status: "200", message: "Saved successfully." });
};

const updateSiteStaffRoles = (request, response) => {
  const userInputData = request.body;
  let saveData = {
    update_id: userInputData.id,
    site_id: userInputData.site_id,
    role_name: userInputData.staff_role_name,
    is_active: userInputData.publish
  };
  SiteStaffRoleModel.updateSiteStaffRoles(saveData);
  response.json({ status: "200", message: "Saved successfully." });
};

const visibiltySiteStaffRolesByStaffID = (request, response) => {
  const id = request.params.siteStaffID;
  SiteStaffRoleModel.getSiteStaffRolesByStaffID(id).then(result => {
    console.log(!result.is_active);
    const saveData = {
      update_id: id,
      is_active: result.is_active == "1" ? "0" : "1"
    };
    SiteStaffRoleModel.updateSiteStaffRoles(saveData);
  });
  response.json({ status: "200", message: "Saved successfully." });
};

const getSiteStaffRoles = (request, response) => {
  SiteStaffRoleModel.getSiteStaffRoles().then(result => {
    response.json({ status: "200", staff_data: result });
  });
};

const getSiteStaffRolesByID = (request, response) => {
  const userInputData = request.params.siteID;
  SiteStaffRoleModel.getSiteStaffRolesByID(userInputData).then(result =>
    response.json({ status: "200", staff_data: result })
  );
};

const getSiteStaffRolesByStaffID = (request, response) => {
  const userInputData = request.params.siteStaffID;
  SiteStaffRoleModel.getSiteStaffRolesByStaffID(userInputData).then(result =>
    response.json({ status: "200", staff_data: result })
  );
};

module.exports = {
  saveSiteStaffRoles,
  getSiteStaffRoles,
  getSiteStaffRolesByID,
  getSiteStaffRolesByStaffID,
  updateSiteStaffRoles,
  visibiltySiteStaffRolesByStaffID
};
