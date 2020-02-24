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
  const userInputData = request.body;
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

module.exports = {
  saveQuestion,
  getQuestion,
  getQuestionByID,
  getChildQuestionByID,
  getQuestionFormInputType
};

// {
// 	"is_child_question":true,
// 	"parent_id":"10",
// 	"tile":"2",
// 	"question":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
// 	"answer_type_id":"1",
// 	"answer_list":{"0":"yes","1":"no"},
// "disable_question":false,
// "age_ristricted":true,
// "age_range":{"min":"15", "max":"58"},
// "gender_target":true,
// "gender_list":{"0":"male","1":"third gender"}
// }
