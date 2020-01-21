module.exports = {
  createUserModel: `INSERT INTO USERS (name, surname, email, password, username, activated, create_date, role_id) VALUES(:name, :surname, :email, :password, :userName, 1, CURRENT_TIMESTAMP, 3);`,
  emailExistQuery: `SELECT id, email FROM USERS WHERE email = :email`
}