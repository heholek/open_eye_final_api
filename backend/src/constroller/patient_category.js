const PatientCategoryMode = require("../model/patient_category");
const _ = require("lodash");

const savePatientCategory = (request, response) => {
  const userInputData = request.body;
  let saveData = {
    category_name: userInputData.patient_category_name,
    minimum_age: userInputData.minimum_age,
    maximum_age: userInputData.maximum_age,
    gender_target: _.join(_.valuesIn(userInputData.gender_target))
  };
  PatientCategoryMode.savePatientCategory(saveData);
  response.json({ status: "200", message: "Saved successfully." });
};

const getPatientCategory = (request, response) => {
  PatientCategoryMode.getPatientCategory().then(result => {
    response.json({ status: "200", patient_category_data: result });
  });
};

module.exports = {
  savePatientCategory,
  getPatientCategory
};
