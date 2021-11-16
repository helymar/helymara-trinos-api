const express = require('express');

const router = express.Router();

const {
  deleteCommentsById,
  CommentsLike,
} = require('../controllers/coments');

const { authMiddleware } = require('../middlewares/authMiddleware');

router.delete('/:id', authMiddleware, deleteCommentsById);

router.post('/:id/likes', authMiddleware, CommentsLike);

module.exports = router;
