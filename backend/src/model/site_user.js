const SiteUserSchema = require("../schema/mysql/site_user");

const saveSiteUsers = questionData => {
  const siteUser = new SiteUserSchema(questionData);
  siteUser.save();
};

const getStieUsers = () => {
  return new Promise((resolve, reject) => {
    SiteUserSchema.findAll().then(result => {
      let responseData = {};
      for (let singleData of result) {
        Object.assign(responseData, {
          [singleData.id]: singleData.user_role_name
        });
      }
      resolve(responseData);
    });
  });
};

const getSiteUsersByID = siteUserID => {
  return SiteUserSchema.findOne({
    where: {
      id: siteUserID
    }
  });
};

const getStieUsersByToken = userToken => {
  return SiteUserSchema.findOne({
    where: {
      user_validation_token: userToken
    }
  });
};

module.exports = {
  saveSiteUsers,
  getStieUsers,
  getStieUsersByToken,
  getSiteUsersByID
};
