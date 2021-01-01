const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//GETS POST
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//SUBMITS POST
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//SPECIFIC GET POST

router.get("/:postId", async (req, res) => {
  try {
    const post = await await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//REMOVE POST
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.deleteOne({
      _id: req.params.postId,
    });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//UPDATE POST
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
