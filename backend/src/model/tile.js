const TileMode = require("../schema/mysql/tile");

const saveTile = questionData => {
  const tile = new TileMode(questionData);
  tile.save();
};

module.exports = {
  saveTile
};
