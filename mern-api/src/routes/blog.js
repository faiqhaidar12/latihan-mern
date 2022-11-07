const express = require("express");
const { body } = require("express-validator");

const router = express.Router();
const blogController = require("../controllers/blog");

//[POST] : /v1/blog/post
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
  blogController.createBlogPost
);
router.get("/posts", blogController.getAllBlogPost);
router.get("/post/:postId", blogController.getBlogPostById);
router.put(
  "/post/:postId",
  [
    body("title")
      .isLength({ min: 2 })
      .withMessage("Minimal Input Title 5 Karakter"),
    body("body")
      .isLength({ min: 5 })
      .withMessage("Minimal Input Body 5 Karakter"),
  ],
  blogController.updateBlogPost
);

module.exports = router;
