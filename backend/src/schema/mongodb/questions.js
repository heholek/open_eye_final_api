const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formQuestionSchema = new Schema({
  question: { type: String, required: true },
  answer_type_id: { type: Number, required: true },
  text_input_size: { type: Number },
  possible_answers: { type: Array },
  default_answer: { type: String },
  supervision_required: { type: Boolean, default: false },
  tile_id: { type: Array, required: true },
  is_active: { type: Boolean, default: true },
  deactivated_datetime: { type: Date },
  replacement_question_ID: { type: Schema.Types.ObjectId },
  age_restricted: { type: Array, default: [0, 150] },
  gender_restricted: { type: Array },
  show_child_question_for: { type: Array },
  child_question: {}
});

module.exports = mongoose.model("question", formQuestionSchema);
