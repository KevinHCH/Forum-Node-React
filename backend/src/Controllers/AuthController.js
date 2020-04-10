require("dotenv").config();
const { executeQuery } = require("../../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { checkEmail, saveToken, insertUser } = require("../Models/AuthModel");

const _jwtSecret = process.env.JWT_TOKEN;

const setToken = async (params) => {
  const { id, email, role_id } = params;
  let userParams = {
    idUser: id,
    role: role_id,
    email: email,
    currentTime: new Date().toISOString(),
  };
  const token = jwt.sign(userParams, _jwtSecret);
  // Guardar este token en el localStorage, este token se pasara en el header para comprobar si esta logueado
  userParams["token"] = token;
  // localStorage.setItem('token', token)
  //Set token in DB
  const dbResponse = await executeQuery(saveToken, userParams);
  return { dbResponse, token };
};
const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await executeQuery(checkEmail, { email, password });

  if (user.data.length > 0) {
    const passwordHash = user.data[0].password;
    const passwordCompare = bcrypt.compareSync(password, passwordHash);
    if (passwordCompare) {
      // console.log(user.data);
      const { role, id, username } = user.data[0];
      const isSetToken = await setToken(user.data[0]);
      if (isSetToken.dbResponse.success) {
        // next();
        res.status(200).json({
          success: true,
          token: isSetToken.token,
          role: role,
          user_id: id,
          user_name: username,
        });
        next();
      }
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password, try it again" });
    }
  } else {
    return res.status(404).json({
      success: false,
      message: "We don't have found any user with this email",
    });
  }
};

const isAuthenticated = (req, res, next) => {
  const headers = req.headers;

  try {
    const token = headers.authorization.split(" ")[1];
    const user = jwt.verify(token, _jwtSecret);
    if (user.idUser) next();
  } catch (error) {
    return res
      .status(401)
      .json({ succes: false, message: "Not authenticated" });
  }
};
const register = async (req, res) => {
  const { email, password, name, surname, userName } = req.body;
  const isRegister = await executeQuery(checkEmail, { email });

  if (isRegister.data.length > 0) {
    return res
      .status(409)
      .json({
        success: false,
        message: "This email account is already register",
      })
      .end();
  } else {
    const hashPassword = bcrypt.hashSync(password, 10);
    const newUser = await executeQuery(insertUser, {
      email,
      password: hashPassword,
      name,
      surname,
      userName,
    });
    if (newUser.success) {
      return res
        .status(200)
        .json({
          success: true,
          message: "You have been registered successfully",
        })
        .end();
    } else {
      return res
        .status(500)
        .json({
          success: false,
          message: "There was an error, try it again",
        })
        .end();
    }
  }
};

module.exports = { login, isAuthenticated, register };
