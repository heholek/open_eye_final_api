const form_version = {
  question_ID_list: { type: DataTypes.TEXT },
  published_status: { type: DataTypes.ENUM(["0", "1"]) },
  published_by_user_ID: { type: DataTypes.NUMBER },
  published_AT: { type: DataTypes.DATE },
  is_active: { type: DataTypes.ENUM(["0", "1"]) },
  deactived_on: { type: DataTypes.DATE },
  deactived_by_user_ID: { type: DataTypes.NUMBER }
};
