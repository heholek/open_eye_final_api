const user_answers = {
  user_connection_ID: { type: DataTypes.STRING },
  form_version_ID: { type: DataTypes.NUMBER },
  answers_keys: { type: DataTypes.TEXT },
  is_active: { type: DataTypes.ENUM(["0", "1"]) }
};
