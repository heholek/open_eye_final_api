const picklist_answers = {
  answer: { type: DataTypes.TEXT },
  question_ID: { type: DataTypes.NUMBER },
  is_active: { type: DataTypes.ENUM(["0", 1]) }
};
