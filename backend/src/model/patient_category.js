const PatientCategoryMode = require("../schema/mysql/patient_category");
const _ = require("lodash");

const savePatientCategory = questionData => {
  const PatientCategory = new PatientCategoryMode(questionData);
  PatientCategory.save();
};

const getPatientCategory = () => {
  return new Promise((resolve, reject) => {
    PatientCategoryMode.findAll().then(result => {
      let responseData = [];
      for (let singleData of result) {
        responseData.push({
          key: singleData.id,
          patient_category_name: singleData.category_name,
          max_age: singleData.maximum_age,
          min_age: singleData.minimum_age,
          genderLlist: _.split(singleData.gender_target, ",")
        });
      }
      resolve(responseData);
    });
  });
};

const getPatientCategoryByID = patient_category_id => {
  return PatientCategoryMode.findOne({
    where: {
      id: patient_category_id
    }
  });
};

const putPatientCategoryBySiteID = patient_category_id => {
  return PatientCategoryMode.findAll({
    where: {
      site_id: patient_category_id
    }
  });
};

module.exports = {
  savePatientCategory,
  getPatientCategory,
  getPatientCategoryByID,
  putPatientCategoryBySiteID
};
