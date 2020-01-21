const { Router } = require("express");
const router = Router();
const {
  createPost,
  getAllPosts,
  getPostById,
  editPost,
  deletePost
} = require("../Controllers/PostController");
router.route("/");

router.post("/create", createPost);
router.post("/delete", deletePost);

router.get("/getAllPosts", getAllPosts);
router.get("/getPostById/:id", getPostById);

router.patch("/edit", editPost)

module.exports = router;
