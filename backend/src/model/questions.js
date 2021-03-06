const QuestionModel = require("../schema/mongodb/questions");
const ForInputType = require("../schema/mysql/form_input_type");
const moment = require("moment");

const saveQuestion = questionData => {
  const question = new QuestionModel(questionData);
  question.save();
};

const getQuestionByID = questionID => {
  return QuestionModel.findById(questionID);
};

const getQuestionByTileID = tileID => {
  return QuestionModel.find({
    tile_id: tileID
  });
};

module.exports = {
  saveQuestion,
  getQuestionByID,
  getQuestionByTileID
};
