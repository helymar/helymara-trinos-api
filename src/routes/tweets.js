const express = require('express');

const router = express.Router();

const {
  createTweet,
  getTweetById,
  getAllMyTweets,
  deleteTweetById,
  
} = require('../controllers/tweets');

const { authMiddleware } = require('../middlewares/authMiddleware');
const { paginationMiddleware } = require('../middlewares/paginationMiddleware');


router.post('/', authMiddleware, createTweet);
router.get('/', authMiddleware,paginationMiddleware, getAllMyTweets);
router.get('/:id', getTweetById);
router.delete('/:id', authMiddleware, deleteTweetById);



module.exports = router;
