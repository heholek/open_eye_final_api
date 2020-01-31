const formQuestionSchema = {
  question: { type: String, required: true },
  question_type_id: { type: Schema.Types.ObjectId, required: true },
  text_input_size: { type: Number },
  possible_answers: { type: Array },
  default_answer: { type: String },
  supervision_required: { type: Boolean, default: false },
  category_id: { type: String, required: true },
  is_active: { type: Boolean, default: true },
  deactivated_datetime: { type: String },
  replacement_question_ID: { type: Schema.Types.ObjectId },
  age_restricted: { type: Array, default: [0, 150] },
  gender_restricted: { type: Array, default: ["m", "f", "non"] },
  show_child_question_for: { type: Array },
  child_question: {}
};
