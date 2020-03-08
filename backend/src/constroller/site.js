const SiteModel = require("../model/site");

const updateSiteByID = (request, response) => {
  const userInputData = request.body;
  const saveData = {
    update_id: userInputData.id,
    site_name: userInputData.site_name,
    is_active: userInputData.publish
  };
  SiteModel.updateSiteByID(saveData);
  response.json({ status: "200", message: "Saved successfully." });
};

const visibiltySiteByID = (request, response) => {
  const id = request.params.site_id;
  SiteModel.getSiteByID(id).then(result => {
    console.log(!result.is_active);
    const saveData = {
      update_id: id,
      is_active: result.is_active == "1" ? "0" : "1"
    };
    SiteModel.updateSiteByID(saveData);
  });
  response.json({ status: "200", message: "Saved successfully." });
};

const saveSite = (request, response) => {
  console.log("save");

  const userInputData = request.body;
  const saveData = {
    site_name: userInputData.site_name,
    is_active: userInputData.publish
  };
  SiteModel.saveSite(saveData);
  response.json({ status: "200", message: "Saved successfully." });
};

const getStie = (request, response) => {
  SiteModel.getStie().then(result => {
    response.json({ status: "200", site_data: result });
  });
};

const getSiteByID = (request, response) => {
  const userInputData = request.params.site_id;
  SiteModel.getSiteByID(userInputData).then(result => {
    response.json({ status: "200", site_data: result });
  });
};

module.exports = {
  saveSite,
  getStie,
  getSiteByID,
  updateSiteByID,
  visibiltySiteByID
};
