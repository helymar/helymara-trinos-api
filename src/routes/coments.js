const express = require('express');

const router = express.Router();

const {
  createTweet,
  getTweetById,
  getAllMyTweets,
  deleteTweetById,
  TweetLike,
  createComents,
  getFeedUsername,
} = require('../controllers/tweets');

const { authMiddleware } = require('../middlewares/authMiddleware');
const { paginationMiddleware } = require('../middlewares/paginationMiddleware');

router.post('/', authMiddleware, createTweet);

router.get('/', authMiddleware, paginationMiddleware, getAllMyTweets);

router.get('/:id', getTweetById);

router.delete('/:id', authMiddleware, deleteTweetById);

router.delete('/:id', authMiddleware, deleteTweetById);

router.post('/:id/likes', authMiddleware, TweetLike);

router.post('/:id/coments', authMiddleware, createComents);

router.get('/feed/:username', paginationMiddleware, getFeedUsername);

module.exports = router;
