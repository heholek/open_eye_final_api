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

const getSiteByID = siteID => {
  return SiteFormModel.findOne({
    where: {
      id: siteID
    }
  });
};

module.exports = {
  saveSiteForm,
  getStieForm,
  getSiteByID
};
