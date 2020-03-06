// var jwt = require("jsonwebtoken");
// const { JWT_KEY } = require("../config/credentials");
// const secreatKey = JWT_KEY[0];

// var token = jwt.sign(
//   {
//     foo: "bfgbkjsdfkgkjdfgjkdf",
//     nfdjgnjkdfg: "bar",
//     ndfnjgdfnjdfsjg: "bar",
//     mnfgnfdngmdsf: "bar",
//     mmdfngdfg8789: "bar",
//     rewr349u88349u8: "toStringsfksfgmfsdg"
//   },
//   secreatKey
// );

// var decoded = jwt.verify(token, secreatKey);
// console.log(decoded); // bar

// // verify a token symmetric
// jwt.verify(token, secreatKey, function(err, decoded) {
//   console.log(decoded.foo); // bar
// });

// const generateToken = (request, response) => {};

// const getDataFromToken = (request, response) => {
//   const recievedData = request.body.token;
//   jwt.verify(recievedData, secreatKey, function(err, decoded) {
//     // console.log(decoded.foo) // bar
//     response.send(decoded);
//   });
// };

// module.exports = {
//   generateToken,
//   getDataFromToken
// };
