const SiteFormModel = require("../schema/mysql/site_form");

const saveSiteForm = questionData => {
  const site = new SiteFormModel(questionData);
  site.save();
};

const getStieForm = () => {
  return new Promise((resolve, reject) => {
    SiteFormModel.findAll().then(result => {
      let responseData = {};
      for (let singleData of result) {
        Object.assign(responseData, { [singleData.id]: singleData.site_name });
      }
      resolve(responseData);
    });
  });
};

const getSiteFormBySiteID = siteID => {
  return SiteFormModel.findAll({
    where: {
      site_id: siteID
    }
  });
};

module.exports = {
  saveSiteForm,
  getStieForm,
  getSiteFormBySiteID
};
