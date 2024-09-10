const express = require('express');
const router = express.Router();
const blogsController = require('../controller/blog.controller');


router.route("/")
.get(blogsController.getAllBlogs)
.post(blogsController.createBlog)

router.route('/single/:blogId')
.get(blogsController.getSingleBlog)
.put(blogsController.updateBlog)
.delete(blogsController.deleteBlog)

router.post("/custom",blogsController.rawBlogFetch)

module.exports = router;