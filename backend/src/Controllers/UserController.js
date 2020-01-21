const { createUserModel, emailExistQuery } = require("../Models/UserModel");
const { executeQuery } = require("../../config/db");
const bcrypt = require("bcrypt");

const emailExist = async email => {
  const emailDB = await executeQuery(emailExistQuery, { email: email });
  return emailDB.data[0] ? true : false;
};
const createUser = async (req, res) => {
  const { name, surname, email, password, userName } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);
  let message, succes;

  const emailExists = await emailExist(email);
  if (emailExists) {
    succes = false;
    message = "The email already exists, try another email";
  } else {
    const insert = await executeQuery(createUserModel, {
      name,
      surname,
      email,
      password: hashPassword,
      userName
    });

    succes = true;
    message = "You have been successfully registered";
  }
  res.json({ succes: succes, message: message }).end();
};
module.exports = { createUser };
