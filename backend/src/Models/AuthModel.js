module.exports = {
  saveToken: `INSERT INTO TOKENS (id_user, token, role_user, create_date, expires_at) VALUES(:idUser, :token, :role, CURRENT_TIMESTAMP, NULL);`,
  checkEmail: `SELECT u.id, email, password, r.role_name as role, u.role_id, u.username
                FROM USERS u
                INNER JOIN ROLES r ON u.role_id = r.id
                WHERE email = :email`,
  insertUser: `INSERT INTO USERS (name, surname, email, password, username, activated, create_date, role_id) 
                            VALUES(:name, :surname, :email, :password, :userName, 1, CURRENT_TIMESTAMP, 2);`
}