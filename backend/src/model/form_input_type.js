const ForInputType = require("../schema/mysql/form_input_type");

const getQuestionFormInputType = () => {
  return ForInputType.findAll({
    is_active: "1"
  });
};

module.exports = {
  getQuestionFormInputType
};
