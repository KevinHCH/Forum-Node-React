const { Router } = require("express");
const router = Router();
const {
  createPost,
  getAllPosts,
  getPostById,
  getPostByUser,
  editPost,
  deletePost,
  searchPost,
} = require("../Controllers/PostController");
router.route("/");

router.post("/create", createPost);
router.post("/delete", deletePost);
router.post("/search", searchPost);
router.post("/getPostsByUser/", getPostByUser);

router.get("/getAllPosts", getAllPosts);
router.get("/getPostById/:id", getPostById);

router.put("/edit", editPost);

module.exports = router;
