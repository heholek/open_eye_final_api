const SiteFormModel = require("../schema/mysql/site_form");

const saveSiteForm = questionData => {
  const site = new SiteFormModel(questionData);
  site.save();
};

const getStieForm = () => {
  return new Promise((resolve, reject) => {
    SiteFormModel.findAll().then(result => {
      let responseData = [];
      for (let singleData of result) {
        responseData.push({
          name: singleData.form_name,
          key: singleData.id,
          edit_by: singleData.edit_staff_id,
          view_by: singleData.view_staff_id,
          site_id: singleData.site_id
        });
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
