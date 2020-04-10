const { Router } = require("express");
const router = Router();
const {
  createComment,
  editComment,
  getComments,
  deleteComment
} = require("../Controllers/CommentController");
router.route("/");

router.get("/getComments/:idPost", getComments)

router.post("/create", createComment);

router.put("/edit", editComment)

router.put("/delete", deleteComment)

module.exports = router;
