const siteMode = require("../model/site");

const saveSite = (request, response) => {
  const userInputData = request.body;
  const saveData = {
    site_name: userInputData.site_name,
    is_active: userInputData.publish
  };
  siteMode.saveSite(saveData);
  response.json({ status: "200", message: "Saved successfully." });
};

const getStie = (request, response) => {
  siteMode.getStie().then(result => {
    response.json({ status: "200", site_data: result });
  });
};

module.exports = {
  saveSite,
  getStie
};
