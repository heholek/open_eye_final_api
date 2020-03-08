const TileSchema = require("../schema/mysql/tile");

const saveTile = questionData => {
  const tile = new TileSchema(questionData);
  tile.save();
};

const getTile = () => {
  return new Promise((resolve, reject) => {
    TileSchema.findAll().then(result => {
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
  return TileSchema.findOne({
    where: {
      id: tileID
    }
  });
};

const getTileBySiteID = siteID => {
  return TileSchema.findAll({
    where: {
      site_id: siteID
    }
  });
};

const getTileBySiteFormID = siteFormID => {
  return TileSchema.findAll({
    where: {
      site_form_id: siteFormID
    }
  });
};

const updateTileByID = updateData => {
  return TileSchema.update(updateData, {
    where: {
      id: updateData.update_id
    }
  });
};

module.exports = {
  saveTile,
  getTile,
  getTileByID,
  getTileBySiteFormID,
  getTileBySiteID,
  updateTileByID
};
