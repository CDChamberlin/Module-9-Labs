let express = require('express');
let router = express.Router();
let Controllers = require('../controllers');

// GET all posts
router.get('/', (req, res) => {
    Controllers.postController.getPosts(req, res);
});

// POST a new post
router.post('/create', (req, res) => {
    Controllers.postController.createPost(req.body, res);
});

// PUT update a post by ID
router.put('/:id', (req, res) => {
    Controllers.postController.updatePost(req.params.id, req.body, res);
});

// DELETE a post by ID
router.delete('/:id', (req, res) => {
    Controllers.postController.deletePost(req.params.id, res);
});

module.exports = router;
