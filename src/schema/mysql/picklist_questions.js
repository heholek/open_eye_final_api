const picklist_questions = {
  question: { type: DataTypes.TEXT },
  is_active: { type: DataTypes.ENUM(["0", "1"]) },
  replacement_question_ID: { type: DataTypes.NUMBER },
  deactivated_AT: { type: DataTypes.DATE }
};
