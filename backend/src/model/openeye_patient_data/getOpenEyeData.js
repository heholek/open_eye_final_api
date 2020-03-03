const mongoose = require("mongoose");
const getOpenEyeDataSchema = require("../../schema/mongodb/recieved_openeye_patient_data");
const _ = require("lodash");

mongoose.set("useUnifiedTopology", true);

const getDataFromDB = nhs_num => {
  return new Promise((resolve, reject) => {
    if (!_.isEmpty(nhs_num)) {
      resolve(
        getOpenEyeDataSchema.findOne({
          "received.patient_details.nhs_num": nhs_num
        })
      );
    } else {
      throw { message: "No NHS Number Found.", status: "404" };
    }
  });
};

const getAllDataFromDB = () => {
  return new Promise((resolve, reject) => {
    console.log("in");
    resolve(getOpenEyeDataSchema.find({}));
  });
};

module.exports = {
  getDataFromDB,
  getAllDataFromDB
};
