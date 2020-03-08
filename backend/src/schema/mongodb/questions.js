const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { formQuestionsData_db } = require("../../config/mongodb");

const formQuestionSchema = new Schema({
  question: { type: String, required: true },
  answer_type_ID: { type: Number, required: true },
  text_input_size: { type: Number },
  possible_answers: { type: Array },
  default_answer: { type: String },
  supervision_required: { type: Boolean, default: false },
  site_ID: { type: Array, required: true },
  tile_ID: { type: Array, required: true },
  site_form_id: { type: Number, required: true },
  publish: { type: Boolean, default: false },
  deactivated_datetime: { type: Date },
  replacement_question_ID: { type: Schema.Types.ObjectId },
  patient_category_type_ID: { type: Number },
  show_child_question_for: { type: Array },
  child_question: { type: Array }
});

module.exports = formQuestionsData_db.model("question", formQuestionSchema);
