const QuestionModel = require("../schema/mongodb/questions");

const saveQuestion = questionData => {
  const question = new QuestionModel(questionData);
  question.save();
};

module.exports = {
  saveQuestion
};
