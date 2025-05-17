const db = require('../config/db');

//Retrived get all data
exports.getAllPosts = (req, res) => {
  db.query("SELECT * FROM posts", (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(results);
  });
};

//Get specific data
exports.getPostById = (req, res) => {
  db.query("SELECT * FROM posts WHERE id = ?", [req.params.id], (err, results) => {
    if (err || results.length === 0) return res.status(404).json({ message: 'Post not found' });
    res.json(results[0]);
  });
};

//Create a data
exports.createPost = (req, res) => {
  const { title, content, author } = req.body;

  // Validate required fields
  if (!title || !content || !author) {
    return res.status(400).json({ message: 'Title, content, and author are required' });
  }

  db.query(
    "INSERT INTO posts (title, content, author) VALUES (?, ?, ?)",
    [title, content, author],
    (err, result) => {
      if (err) return res.status(500).json({ message: err.message });
      res.status(201).json({ message: `Post created with ID ${result.insertId}` });
    }
  );
};


//Update the data Post
exports.updatePost = (req, res) => {
  const { title, content, author } = req.body;
  const postId = req.params.id;

  // Validate required fields
  if (!title || !content || !author) {
    return res.status(400).json({ message: 'Title, content, and author are required' });
  }

  db.query(
    "UPDATE posts SET title=?, content=?, author=? WHERE id=?",
    [title, content, author, postId],
    (err, result) => {
      if (err) return res.status(500).json({ message: err.message });
      if (result.affectedRows === 0)
        return res.status(404).json({ message: 'Post not found' });
      res.json({ message: `Post with ID ${postId} updated` });
    }
  );
};


//Delete the data
exports.deletePost = (req, res) => {
  const postId = req.params.id;
  db.query("DELETE FROM posts WHERE id = ?", [postId], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Post not found' });
    res.json({ message: `Post with ID ${postId} deleted` });
  });
};
