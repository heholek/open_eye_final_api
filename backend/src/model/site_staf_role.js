const SiteStaffRoleSchema = require("../schema/mysql/site_role");

const saveSiteStaffRoles = questionData => {
  const tile = new SiteStaffRoleSchema(questionData);
  tile.save();
};

const getSiteStaffRoles = () => {
  return new Promise((resolve, reject) => {
    SiteStaffRoleSchema.findAll().then(result => {
      let responseData = [];
      for (let singleData of result) {
        responseData.push({
          name: singleData.role_name,
          key: singleData.id,
          site_id: singleData.site_id
        });
      }
      resolve(responseData);
    });
  });
};

const getSiteStaffRolesByID = siteID => {
  return SiteStaffRoleSchema.findAll({
    where: {
      site_id: siteID
    }
  });
};
const getSiteStaffRolesByStaffID = siteStaffID => {
  return SiteStaffRoleSchema.findOne({
    where: {
      id: siteStaffID
    }
  });
};

const updateSiteStaffRoles = updateData => {
  return SiteStaffRoleSchema.update(updateData, {
    where: {
      id: updateData.update_id
    }
  });
};

module.exports = {
  saveSiteStaffRoles,
  getSiteStaffRoles,
  getSiteStaffRolesByID,
  getSiteStaffRolesByStaffID,
  updateSiteStaffRoles
};
