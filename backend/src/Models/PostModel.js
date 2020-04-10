module.exports = {
  getAllPostsModel: `SELECT p.id, p.title, p.description, p.user_id, DATE_FORMAT(p.create_date, '%d/%m/%Y') as date, u.username as author
                     FROM POSTS p
                     INNER JOIN USERS u
                     ON p.user_id = u.id
                     WHERE p.published = 1
                     ORDER BY id DESC`,
  getPostByIdModel: `SELECT p.id, p.title, p.description, p.content, p.resources, p.user_id, DATE_FORMAT(p.create_date, '%d/%m/%Y') as date, u.username as author 
                     FROM POSTS p
                     INNER JOIN USERS u
                     ON p.user_id = u.id
                     WHERE p.id = :id`,
  getPostsByUserIdModel: `SELECT p.id, p.title, p.description, p.resources, p.user_id, DATE_FORMAT(p.create_date, '%d/%m/%Y') as date, u.username as author 
                     FROM POSTS p
                     INNER JOIN USERS u
                     ON p.user_id = u.id
                     WHERE u.id = :id
                     AND p.published is true
                     ORDER BY p.id DESC`,
  editPostModel: `UPDATE POSTS SET :fields WHERE id=:id AND user_id = :userId;`,
  deletePostModel: `UPDATE POSTS SET published = 0 WHERE id = :id`,
  createPostModel: `INSERT INTO POSTS (title, description, content, resources, published, create_date, user_id) VALUES(:title, :description, :content, '', 1, CURRENT_TIMESTAMP, :userId);`,
  searchPostsModel: `SELECT
                  p.id,
                  p.title,
                  p.description,
                  p.resources,
                  p.user_id,
                  DATE_FORMAT(p.create_date, '%d/%m/%Y') as date,
                  u.username as author
                FROM
                  POSTS p
                INNER JOIN USERS u ON
                  p.user_id = u.id
                WHERE
                  (title REGEXP :param
                  or description REGEXP :param
                  or content REGEXP :param)
                  AND published is TRUE
                ORDER BY date DESC`

};