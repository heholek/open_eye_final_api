const TileMode = require("../schema/mysql/tile");

const saveTile = questionData => {
  const tile = new TileMode(questionData);
  tile.save();
};

const getTile = () => {
  return new Promise((resolve, reject) => {
    TileMode.findAll().then(result => {
      let responseData = [];
      for (let singleData of result) {
        responseData.push({
          name: singleData.tile_name,
          key: singleData.id,
          site_id: singleData.site_id
        });
      }
      resolve(responseData);
    });
  });
};

module.exports = {
  saveTile,
  getTile
};
