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

const getTileByID = tileID => {
  return TileMode.findOne({
    where: {
      id: tileID
    }
  });
};

module.exports = {
  saveTile,
  getTile,
  getTileByID
};
