module.exports = {
  getAllPostsModel: `SELECT * FROM POSTS WHERE published = 1`,
  getPostByIdModel: `SELECT * FROM POSTS WHERE id = :id`,
  editPostModel: `UPDATE POSTS SET :fields WHERE id=:id AND user_id = :userId;`,
  deletePostModel: `UPDATE POSTS SET published = 0 WHERE id = :id AND user_id = :userId`,
  createPostModel: `INSERT INTO POSTS (title, description, content, resources, published, create_date, user_id) VALUES(:title, :description, :content, '', 1, CURRENT_TIMESTAMP, :userId);`
};