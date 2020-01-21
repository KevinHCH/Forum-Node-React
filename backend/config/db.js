const mysql = require("mysql2");
const prepare = require("yesql").mysql;
require("dotenv").config();

const dbh =  mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});
const executeQuery = async (query, params = {}) => {
  const responseDB = await dbh.promise().execute(prepare(query)(params))
                              .then(([rows, fields]) => {
                                if (rows) return {success: true, data: rows}
                              })
                              .catch(error => ({success: false, error: error.sqlMessage}))
  return responseDB;
}//executeQuery
module.exports = {
  executeQuery
};
