const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formQuestionSchema = new Schema({
  question: { type: String, required: true },
  answer_type_ID: { type: Number, required: true },
  text_input_size: { type: Number },
  possible_answers: { type: Array },
  default_answer: { type: String },
  supervision_required: { type: Boolean, default: false },
  site_ID: { type: Array, required: true },
  tile_ID: { type: Array, required: true },
  publish: { type: Boolean, default: false },
  deactivated_datetime: { type: Date },
  replacement_question_ID: { type: Schema.Types.ObjectId },
  patient_category_type_ID: { type: Number },
  show_child_question_for: { type: Array },
  child_question: { type: Array }
});

module.exports = mongoose.model("question", formQuestionSchema);

// const inputData = {
//   is_child_question: true,
//   site_id: ["1"],
//   parent_question_id: ["10"],
//   tile_id: ["2"],
//   question:
//     "22222Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   answer_type_id: "1",
//   answer_list: { "0": "yes", "1": "no" },
//   disable_question: false,
//   patient_category_type_id: 10,
//   child_question_array: {},
//   is_active: "1"
// };
