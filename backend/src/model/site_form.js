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

const getSiteFormBySiteFormID = siteFormID => {
  return SiteFormModel.findOne({
    where: {
      id: siteFormID
    }
  });
};

const updateSiteForm = updateData => {
  return SiteFormModel.update(updateData, {
    where: {
      id: updateData.update_id
    }
  });
};

module.exports = {
  saveSiteForm,
  getStieForm,
  getSiteFormBySiteID,
  getSiteFormBySiteFormID,
  updateSiteForm
};
