const SiteSchema = require("../schema/mysql/site");

const saveSite = questionData => {
  const site = new SiteSchema(questionData);
  site.save();
};

const getStie = () => {
  return new Promise((resolve, reject) => {
    SiteSchema.findAll().then(result => {
      let responseData = {};
      for (let singleData of result) {
        Object.assign(responseData, { [singleData.id]: singleData.site_name });
      }
      resolve(responseData);
    });
  });
};

const getSiteByID = siteID => {
  return SiteSchema.findOne({
    where: {
      id: siteID
    }
  });
};

const updateSiteByID = updateData => {
  return SiteSchema.update(
    {
      site_name: updateData.site_name,
      is_active: updateData.is_active
    },
    {
      where: {
        id: updateData.update_id
      }
    }
  );
};

module.exports = {
  saveSite,
  getStie,
  getSiteByID,
  updateSiteByID
};
