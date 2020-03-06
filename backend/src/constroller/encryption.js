var aesjs = require("aes-js");

const generateCipher = (request, response) => {
    console.log(aesjs.utils.utf8.toBytes("aString"))
};

const deCipher = () => {};

module.exports = {
  generateCipher,
  deCipher
};
