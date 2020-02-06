const PatientCategoryMode = require("../schema/mysql/patient_category");

const savePatientCategory = questionData => {
  const PatientCategory = new PatientCategoryMode(questionData);
  PatientCategory.save();
};

module.exports = {
  savePatientCategory
};
