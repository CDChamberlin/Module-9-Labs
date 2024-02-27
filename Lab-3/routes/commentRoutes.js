let express = require('express');
let router = express.Router();
let Controllers = require('../controllers');

// GET all comments
router.get('/', (req, res) => {
    Controllers.commentController.getComments(req,res);
});

// POST a new comment
router.post('/create', (req, res) => {
    Controllers.commentController.createComment(req.body, res);
});

// PUT update a comment by ID
router.put('/:id', (req, res) => {
    Controllers.commentController.updateComment(req.params.id, req.body, res);
});

// DELETE a comment by ID
router.delete('/:id', (req, res) => {
    Controllers.commentController.deleteComment(req.params.id, res);
});

module.exports = router;
