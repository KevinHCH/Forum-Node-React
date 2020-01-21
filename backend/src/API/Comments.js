const { Router } = require("express");
const router = Router();
const {
  createComment,
  editComment,
  getComments
} = require("../Controllers/CommentController");
router.route("/");

router.get("/getComments/:idPost", getComments)

router.post("/create", createComment);

router.patch("/edit", editComment)

module.exports = router;
