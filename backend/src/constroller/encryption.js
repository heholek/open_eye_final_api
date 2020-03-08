const Cryptr = require("cryptr");
const { ENCRYP_KEY } = require("../config/credentials");
const cryptr = new Cryptr(ENCRYP_KEY[0]);

const cipherThisString = string => {
  return cryptr.encrypt(string);
};

const decipherThisString = string => {
  return cryptr.decrypt(string);
};

module.exports = {
  cipherThisString,
  decipherThisString
};
