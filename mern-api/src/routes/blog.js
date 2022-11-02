const express = require("express");
const { body } = require("express-validator");

const router = express.Router();
const blogControllerPost = require("../controllers/blog");

router.post(
  "/post",
  [
    body("title")
      .isLength({ min: 2 })
      .withMessage("Minimal Input Title 5 Karakter"),
    body("body")
      .isLength({ min: 5 })
      .withMessage("Minimal Input Body 5 Karakter"),
  ],
  blogControllerPost.createBlogPost
);
//[POST] : /v1/blog/post
module.exports = router;
