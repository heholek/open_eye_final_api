const PatientCategoryMode = require("../model/patient_category");
const _ = require("lodash");

const savePatientCategory = (request, response) => {
  const userInputData = request.body;
  let saveData = {
    site_id: userInputData.site_id,
    category_name: userInputData.patient_category_name,
    minimum_age: userInputData.minimum_age,
    maximum_age: userInputData.maximum_age,
    gender_target: _.join(_.valuesIn(userInputData.gender_target)),
    is_active: userInputData.publish
  };
  PatientCategoryMode.savePatientCategory(saveData);
  response.json({ status: "200", message: "Saved successfully." });
};

const getPatientCategory = (request, response) => {
  PatientCategoryMode.getPatientCategory().then(result => {
    response.json({ status: "200", patient_category_data: result });
  });
};

const getPatientCategoryByPatientCategoryID = (request, response) => {
  const userInputData = request.params.patient_category_id;
  PatientCategoryMode.getPatientCategoryByPatientCategoryID(userInputData).then(
    result => {
      response.json({ status: "200", patient_category_data: result });
    }
  );
};

const getPatientCategoryByID = (request, response) => {
  const userInputData = request.params.patient_category_id;
  PatientCategoryMode.getPatientCategoryByID(userInputData).then(result => {
    response.json({ status: "200", patient_category_data: result });
  });
};

const updatePatientCategory = (request, response) => {
  const userInputData = request.body;
  let saveData = {
    update_id: userInputData.id,
    site_id: userInputData.site_id,
    category_name: userInputData.patient_category_name,
    minimum_age: userInputData.minimum_age,
    maximum_age: userInputData.maximum_age,
    gender_target: _.join(_.valuesIn(userInputData.gender_target)),
    is_active: userInputData.publish
  };
  PatientCategoryMode.updatePatientCategory(saveData);
  response.json({ status: "200", message: "Saved successfully." });
};

module.exports = {
  savePatientCategory,
  getPatientCategory,
  getPatientCategoryByID,
  getPatientCategoryByPatientCategoryID,
  updatePatientCategory
};
