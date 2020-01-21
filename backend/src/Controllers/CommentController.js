const {
  createCommentModel,
  editCommentModel,
  getCommentsModel
} = require("../Models/CommnetModel");
const { executeQuery } = require("../../config/db");
const { jsonResponse } = require("../utils");

const createComment = async (req, res) => {
  const { idPost, idUser, comment } = req.body;
  const messages = {
    success: "The comment was added",
    error: "We wasn't can added your comment"
  };
  const newComment = await executeQuery(createCommentModel, {
    idPost,
    idUser,
    comment
  });
  const jsonRes = jsonResponse(newComment.success, messages);
  return res.json(jsonRes).end();
};

const editComment = async (req, res) => {
  const { id, idPost, idUser, comment } = req.body;
  const messages = {
    success: "The comment was updated",
    error: "We wasn't can update your comment"
  };
  const commentUpdate = await executeQuery(editCommentModel, {
    comment,
    id,
    idPost,
    idUser
  });
  const jsonRes = jsonResponse(commentUpdate.success, messages);
  return res.json(jsonRes).end();
};

const getComments = async (req, res) => {
  const { idPost } = req.params;
  const messages = {
    success: `All the comments associated to POST_ID: ${idPost}`,
    error: `We can't find any comments for this POST (${idPost})`
  };
  const allComments = await executeQuery(getCommentsModel, { idPost });
  const jsonRes = jsonResponse(allComments.success, messages, allComments.data);
  return res.json(jsonRes).end();
};

module.exports = {
  createComment,
  editComment,
  getComments
};
