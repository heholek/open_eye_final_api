const SiteFormModel = require("../model/site_user");

const saveSiteUsers = (request, response) => {
  const userInputData = request.body;
  let saveData = {
    user_id: userInputData.user_ID,
    user_role_name: userInputData.user_role,
    site_id: userInputData.site_ID,
    is_active: userInputData.publish
  };
  SiteFormModel.saveSiteUsers(saveData);
  response.json({ status: "200", message: "Saved successfully." });
};

const getStieUsers = (request, response) => {
  SiteFormModel.getStieUsers().then(result => {
    response.json({ status: "200", site_users: result });
  });
};

const getSiteUsersByID = (request, response) => {
  const userInputData = request.params.site_user_id;
  SiteFormModel.getSiteUsersByID(userInputData).then(result =>
    response.json({ status: "200", question_data: result })
  );
};

module.exports = {
  saveSiteUsers,
  getStieUsers,
  getSiteUsersByID
};
