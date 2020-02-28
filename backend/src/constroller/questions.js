const questionModel = require("../model/questions");
const formInputModel = require("../model/form_input_type");
const _ = require("lodash");

const saveQuestion = (request, response) => {
  const userInputData = request.body;

  if (userInputData.is_child_question == true) {
    createChildQuestionByID(userInputData);
  } else {
    createNewQuestion(userInputData);
  }

  response.json({ status: "200", message: "Saved successfully." });
};

const updateQuestion = (request, response) => {
  const userInputData = request.body;
  if (userInputData.questionID != null) {
    if (userInputData.indexID != null) {
      updateChildQuestionData(userInputData);
    } else {
      updateParentQuestion(userInputData);
    }
  }
  response.json({ status: "200", message: "Saved successfully." });
};

const updateChildQuestionData = questionData => {
  console.log(questionData);
};

const updateParentQuestion = questionData => {
  questionData.key = questionData.questionID;
  questionModel.updateParentQuestion(questionData);
};

const createNewQuestion = userInputData => {
  questionModel.saveQuestion(userInputData);
};

const createChildQuestionByID = userInputData => {
  const _id = userInputData.parent_question_ID;
  questionModel.getQuestionByID(_id).then(result => {
    result.child_question.push(userInputData);
    saveData = { ...result };
    questionModel.saveQuestion(result);
  });
};

const getQuestion = (request, response) => {
  questionModel.getQuestion().then(result => {
    response.json({ status: "200", message: "Data Found.", data: result });
  });
};

const getQuestionByID = (request, response) => {
  const userInputData = request.params.question_id;
  searchQuestionByID(userInputData).then(result => {
    response.json({ status: "200", message: "Data Found.", data: result });
  });
};

const searchQuestionByID = questionID => {
  return questionModel.getQuestionByID(questionID);
};

const getQuestionFormInputType = (request, response) => {
  formInputModel.getQuestionFormInputType().then(result => {
    response.json({ status: "200", data: result });
  });
};

const getChildQuestionByID = (request, response) => {
  if (request.params.child_question_id != "") {
    searchQuestionByID(request.params.question_id).then(result => {
      let child_question_data =
        result.child_question[request.params.child_question_id];
      response.json({
        status: "200",
        message: "Data Found.",
        data: child_question_data
      });
    });
  }
};

const getQuestionBySiteID = (request, response) => {
  if (request.params.siteID != "") {
    questionModel.getQuestionBySiteID(request.params.siteID).then(result => {
      response.json({
        status: "200",
        message: "Data Found.",
        data: result
      });
    });
  }
};

const getQuestionBySiteFormID = (request, response) => {
  if (request.params.siteFormID != "") {
    questionModel
      .getQuestionBySiteFormID(request.params.siteFormID)
      .then(result => {
        response.json({
          status: "200",
          message: "Data Found.",
          data: result
        });
      });
  }
};

const getQuestionByformTileID = (request, response) => {
  if (request.params.formTileID != "") {
    questionModel
      .getQuestionByTileID(request.params.formTileID)
      .then(result => {
        response.json({
          status: "200",
          message: "Data Found.",
          data: result
        });
      });
  }
};

module.exports = {
  saveQuestion,
  updateQuestion,
  getQuestion,
  getQuestionByID,
  getQuestionBySiteID,
  getQuestionBySiteFormID,
  getQuestionByformTileID,
  getChildQuestionByID,
  getQuestionFormInputType
};
