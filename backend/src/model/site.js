const TileMode = require("../schema/mysql/site");

const saveSite = questionData => {
  const site = new TileMode(questionData);
  site.save();
};

const getStie = () => {
  return new Promise((resolve, reject) => {
    TileMode.findAll().then(result => {
      let responseData = {};
      for (let singleData of result) {
        Object.assign(responseData, { [singleData.id]: singleData.site_name });
      }
      resolve(responseData);
    });
  });
};

module.exports = {
  saveSite,
  getStie
};
