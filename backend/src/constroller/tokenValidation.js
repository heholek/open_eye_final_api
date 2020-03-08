const { JWT_KEY } = require("../config/credentials");
var jwt = require("jsonwebtoken");
const userTokenKey = JWT_KEY[0];

const generateToke = data => {
  return jwt.sign(
    {
      ...data
    },
    userTokenKey
  );
};

const verifyToke = token => {
  if (jwt.verify(token, userTokenKey)) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  generateToke,
  verifyToke
};
