module.exports = {
  createCommentModel: `INSERT INTO COMMENTS (id_post, id_user, date, comment) VALUES(:idPost, :idUser, CURRENT_TIMESTAMP, :comment);`,
  editCommentModel: `UPDATE COMMENTS SET comment=:comment WHERE id=:id AND id_post=:idPost AND id_user=:idUser ;`,
  getCommentsModel: `SELECT * FROM COMMENTS WHERE id_post = :idPost`
}