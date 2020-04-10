const {
  createPostModel,
  getAllPostsModel,
  getPostByIdModel,
  getPostsByUserIdModel,
  editPostModel,
  deletePostModel,
  searchPostsModel,
} = require("../Models/PostModel");
const { executeQuery } = require("../../config/db");
const { jsonResponse } = require("../utils");

const getAllPosts = async (req, res) => {
  const posts = await executeQuery(getAllPostsModel);
  const messages = {
    success: "All the posts",
    error: "We can't serve all the post",
  };
  const jsonRes = jsonResponse(posts.success, messages, posts.data);
  return res.json(jsonRes);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await executeQuery(getPostByIdModel, { id });
  const messages = {
    success: `Post ID: ${id}`,
    error: `We was can't found the post by this ID (${id}) , try it again`,
  };

  const jsonRes = jsonResponse(post.success, messages, post.data);
  return res.json(jsonRes).end();
};

const getPostByUser = async (req, res) => {
  const { id } = req.body;
  const post = await executeQuery(getPostsByUserIdModel, { id });
  const messages = {
    success: `Post ID: ${id}`,
    error: `We was can't found the post by this ID (${id}) , try it again`,
  };

  const jsonRes = jsonResponse(post.success, messages, post.data);
  return res.json(jsonRes).end();
};

const createPost = async (req, res) => {
  const { title, description, content, userId } = req.body;
  const post = await executeQuery(createPostModel, {
    title,
    description,
    content,
    userId,
  });
  const messages = {
    success: "Post was created successfully",
    error: "We wasn't cancreate the post",
  };
  const jsonRes = jsonResponse(post.success, messages);

  return res.json(jsonRes).end();
};

const editPost = async (req, res) => {
  const fields = { ...req.body };
  const rawFields = [{ ...req.body }];
  const filteredFields = rawFields.filter((v) => {
    if (v.hasOwnProperty("userId") || v.hasOwnProperty("id")) {
      delete v["id"];
      delete v["userId"];
    }
    return v;
  });
  const updatedFields = Object.entries({ ...filteredFields[0] });
  const updateStr = updatedFields
    .map((item) => `${item[0]}=:${item[0]}, `)
    .join("")
    .trim()
    .slice(0, -1);
  const editPostQuery = editPostModel.replace(":fields", updateStr);
  const messages = {
    success: "Post was updated successfully",
    error: "We wasn't can update the post",
  };
  const postUpdate = await executeQuery(editPostQuery, fields);
  const jsonRes = jsonResponse(postUpdate.success, messages);

  return res.json(jsonRes).end();
};

const deletePost = async (req, res) => {
  const postDeleted = await executeQuery(deletePostModel, req.body);
  const messages = {
    success: "Post was deleted successfully",
    error: "We wasn't can delete the post",
  };
  const jsonRes = jsonResponse(postDeleted.success, messages);
  return res.json(jsonRes).end();
};

const searchPost = async (req, res) => {
  const { query } = req.body;

  const postFinded = await executeQuery(searchPostsModel, { param: query });
  if (postFinded.data.length > 0) {
    return res
      .json({
        success: true,
        data: postFinded.data,
      })
      .end();
  } else {
    return res
      .json({
        success: false,
        message: `We don't have found any post with this keyword: ${query}`,
      })
      .end();
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  getPostByUser,
  editPost,
  deletePost,
  searchPost,
};
