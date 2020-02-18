const questionModel = require("../model/questions");
const formInputModel = require("../model/form_input_type");
const _ = require("lodash");

const saveQuestion = (request, response) => {
  const userInputData = request.body;
  let saveData = {
    tile_id: userInputData.tile,
    question: userInputData.question,
    answer_type_id: userInputData.answer_type_id,
    possible_answers: _.valuesIn(userInputData.answer_list),
    is_active: userInputData.publish,
    deactivated_datetime: new Date()
  };

  if (userInputData.age_ristricted) {
    saveData.age_restricted = _.valuesIn(userInputData.age_range);
  }

  if (userInputData.gender_target) {
    saveData.gender_restricted = _.valuesIn(userInputData.gender_list);
  }

  questionModel.saveQuestion(saveData);
  response.json({ status: "200", message: "Saved successfully." });
};

const getQuestion = (request, response) => {
  const userInputData = request.body;
};

const getQuestionByID = (request, response) => {
  const userInputData = request.params.question_id;
  questionModel.getQuestionByID(userInputData).then(result => {
    response.json({ status: "200", message: "Data Found.", data: result });
  });
};

const getQuestionFormInputType = (request, response) => {
  formInputModel.getQuestionFormInputType().then(result => {
    response.json({ status: "200", data: result });
  });
};

module.exports = {
  saveQuestion,
  getQuestion,
  getQuestionByID,
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
