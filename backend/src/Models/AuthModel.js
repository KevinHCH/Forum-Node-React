module.exports = {
  saveToken: `INSERT INTO TOKENS (id_user, token, role_user, create_date, expires_at) VALUES(:idUser, :token, :role, CURRENT_TIMESTAMP, NULL);`,
  checkEmail: `SELECT id, email, password, role_id FROM USERS WHERE email = :email`
}