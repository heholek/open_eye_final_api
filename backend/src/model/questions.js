const QuestionModel = require("../schema/mongodb/questions");
const moment = require("moment");

const saveQuestion = questionData => {
  const question = new QuestionModel(questionData);
  question.save();
};

const updateParentQuestion = questionData => {
  QuestionModel.findOneAndUpdate({ _id: questionData.key }, questionData).then(
    r => {
      console.log(r);
    }
  );
};

const getQuestionByID = questionID => {
  return QuestionModel.findById(questionID);
};

const getQuestion = () => {
  return QuestionModel.find({});
};

const getQuestionBySiteID = siteID => {
  return QuestionModel.find({
    site_ID: siteID
  });
};

const getQuestionBySiteFormID = siteFormID => {
  return QuestionModel.find({
    site_form_id: siteFormID
  });
};

const getQuestionByTileID = tileID => {
  return QuestionModel.find({
    tile_ID: tileID
  });
};

module.exports = {
  saveQuestion,
  getQuestion,
  getQuestionByID,
  getQuestionByTileID,
  updateParentQuestion,
  getQuestionBySiteID,
  getQuestionBySiteFormID
};
