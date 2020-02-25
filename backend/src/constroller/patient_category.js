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

const getPatientCategoryByID = (request, response) => {
  const userInputData = request.params.patient_category_id;
  PatientCategoryMode.getPatientCategoryByID(userInputData).then(result => {
    response.json({ status: "200", patient_category_data: result });
  });
};

const putPatientCategoryBySiteID = (request, response) => {
  const userInputData = request.params.siteID;
  PatientCategoryMode.putPatientCategoryBySiteID(userInputData).then(result => {
    response.json({ status: "200", patient_category_data: result });
  });
};

module.exports = {
  savePatientCategory,
  getPatientCategory,
  getPatientCategoryByID,
  putPatientCategoryBySiteID
};
