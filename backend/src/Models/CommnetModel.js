module.exports = {
  createCommentModel: `INSERT INTO COMMENTS (id_post, id_user, date, comment) VALUES(:idPost, :idUser, CURRENT_TIMESTAMP, :comment);`,
  editCommentModel: `UPDATE COMMENTS SET comment=:comment WHERE id=:id AND id_post=:idPost AND id_user=:idUser ;`,
  getCommentsModel: `SELECT
                       c.id,
                       c.id_post,
                       c.id_user,
                       DATE_FORMAT(c.date, '%d/%m/%Y %H:%i') as pub_date,
                       c.comment,
                       u.name as user_name
                     FROM
                       COMMENTS c
                     INNER JOIN USERS u ON
                       u.id = c.id_user
                     WHERE id_post = :idPost
                     AND c.published IS TRUE`,
  deleteCommentModel: `UPDATE COMMENTS SET published=0 WHERE id=:id AND id_post=:idPost AND id_user=:idUser;`
}