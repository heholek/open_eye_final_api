const SiteFormModel = require("../model/site_user");
const md5 = require('md5');
const Cryptr = require('cryptr');
const {JWT_KEY, ENCRYP_KEY} = require("../config/credentials")
var jwt = require("jsonwebtoken");
const userTokenKey = JWT_KEY[0];
const cryptr = new Cryptr(ENCRYP_KEY[0]);

const generateToke = data => {
  return jwt.sign(
    {
      ...data
    },
    userTokenKey
  );
}

const verifyToke = token => {
  if(jwt.verify(token, userTokenKey)) 
    {return true}
  else 
    {return false}
}
const cipherThisString = string => {
  return cryptr.encrypt(string);
}

const decipherThisString = string => {
  return cryptr.decrypt(string);
}

const saveSiteUsers = (request, response) => {
  const userInputData = request.body;
  const userValidationToken = generateToke({username:userInputData.user_name, role:userInputData.staff_role, site: userInputData.site_id})
  
  let saveData = {
    user_name: userInputData.user_name,
    password: md5(userInputData.password),
    site_id: userInputData.site_id,
    user_validation_token: userValidationToken,
    staff_role: userInputData.staff_role,
    is_active: userInputData.publish
  };
  SiteFormModel.saveSiteUsers(saveData);
  response.json({ status: "200", message: "Saved successfully.", user_key:cipherThisString(JSON.stringify({key: userValidationToken})) });
};

const validateUserToken = userKey => {
  try {
    const userToken = JSON.parse(decipherThisString(userKey))
    if(verifyToke(userToken.key)) {
      return userToken.key
    }
  } catch {
    return false
  }

};

const viewTestData = (req, res) => {
  res.json({"status":"200", "data":JSON.parse(decipherThisString(req.body.data))});
}

const getStieUsersByToken = (request, response) => {
  const userToken = validateUserToken(request.body.user_key)

  if(userToken) {
    SiteFormModel.getStieUsersByToken(userToken).then(result =>
      response.json({ status: "200", data: cipherThisString(JSON.stringify(result)) })
    );
  } else {
    response.json({ status: "404", message: "invalid data" })
  }
};

const getSiteUsersByID = (request, response) => {
  const userInputData = request.params.site_user_id;
  SiteFormModel.getSiteUsersByID(userInputData).then(result =>
    response.json({ status: "200", question_data: result })
  );
};

module.exports = {
  saveSiteUsers,
  getStieUsersByToken,
  viewTestData,
  getSiteUsersByID
};
