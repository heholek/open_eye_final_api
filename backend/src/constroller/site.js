const siteMode = require("../model/site");

const saveSite = (request, response) => {
  console.log(request);
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

const getSiteByID = (request, response) => {
  const userInputData = request.params.site_id;
  siteMode.getSiteByID(userInputData).then(result => {
    response.json({ status: "200", site_data: result });
  });
};

module.exports = {
  saveSite,
  getStie,
  getSiteByID
};
