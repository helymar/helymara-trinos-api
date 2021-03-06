const ApiError = require('../utils/ApiError');

const { Tweets, User, Comments } = require('../database/models');

const TweetSerializer = require('../serializers/TweetSerializer');
const ComentsSerializer = require('../serializers/ComentsSerializer');
const TweetsSerializer = require('../serializers/TweetsSerializer');

const findTweet = async (where) => {
  Object.assign(where);

  const tweet = await Tweets.findOne({ where });
  if (!tweet) {
    throw new ApiError('Tweet not found', 404);
  }

  return tweet;
};

const findUser = async (where) => {
  Object.assign(where, { active: true });

  const user = await User.findOne({ attributes: { exclude: ['password', 'role', 'active', 'token'] }, where });
  if (!user) {
    throw new ApiError('User not found', 404);
  }

  return user;
};

const getAllMyTweets = async (req, res, next) => {
  const where = {
    userId: req.user.id,
  };
  const myTweets = await Tweets.findAll({ where, ...req.pagination, include: [{ model: Comments, attributes: ['id', 'text', 'likeCounter', 'tweetId', 'createdAt', 'updatedAt'], as: 'comments' }] });

  res.json(new TweetsSerializer(myTweets, await req.getPaginationInfo(Tweets)));
};

const createTweet = async (req, res, next) => {
  try {
    const { body } = req;

    const tweetPayload = {
      text: body.text,
      likeCounter: 0,
      userId: req.user.id,
    };
    if (Object.values(tweetPayload).some((val) => val === undefined)) {
      throw new ApiError('Bad request', 400);
    }

    const Tweet = await Tweets.create(tweetPayload);
    const user = await findUser(req.user.id);
    Tweet.dataValues.user = user.dataValues;
    Tweet.dataValues.comments = [];
    res.json(new TweetSerializer(Tweet));
  } catch (err) {
    next(err);
  }
};

const getTweetById = async (req, res, next) => {
  try {
    const { params } = req;
    const tweet = await findTweet({ id: Number(params.id) });

    res.json(new TweetSerializer(tweet));
  } catch (err) {
    next(err);
  }
};

const deleteTweetById = async (req, res, next) => {
  try {
    const { params } = req;

    const tweetId = Number(params.id);
    const mytweet = await findTweet({ id: tweetId });

    const Tweet = await Tweets.destroy({ where: { id: tweetId } });
    res.json(new TweetSerializer(null));
  } catch (err) {
    next(err);
  }
};

const TweetLike = async (req, res, next) => {
  try {
    const { params } = req;

    const Idtweet = Number(params.id);

    const Tweetss = await findTweet({ id: Idtweet });
    const where = {
      tweetId: Idtweet,
    };
    Object.assign(where);
    const comments = await Comments.findAll({ where });
    const user = await findUser({ id: Tweetss.dataValues.userId });

    const tweetPayload = {
      likeCounter: Tweetss.dataValues.likeCounter + 1,
    };

    Tweetss.dataValues.user = user;
    Tweetss.dataValues.comments = comments;
    Object.assign(Tweetss, tweetPayload);

    await Tweetss.save();

    res.json(new TweetSerializer(Tweetss));
  } catch (err) {
    next(err);
  }
};

const createComents = async (req, res, next) => {
  try {
    const { body, params } = req;

    const tweet = await findTweet({ id: Number(params.id) });

    const tweetcomentsPayload = {
      text: body.text,
      likeCounter: 0,
      tweetId: params.id,
    };
    if (Object.values(tweetcomentsPayload).some((val) => val === undefined)) {
      throw new ApiError('Bad request', 400);
    }

    const Coment = await Comments.create(tweetcomentsPayload);

    res.json(new ComentsSerializer(Coment));
  } catch (err) {
    next(err);
  }
};

const getFeedUsername = async (req, res, next) => {
  try {
    const { params } = req;
    const user = await findUser({ username: params.username });
    const where = {
      userId: user.id,
    };
    const myTweets = await Tweets.findAll({ where, ...req.pagination, include: [{ model: User, attributes: ['id', 'name', 'username', 'email', 'createdAt', 'updatedAt', 'lastLoginDate'], as: 'user' }, { model: Comments, attributes: ['id', 'text', 'likeCounter', 'tweetId', 'createdAt', 'updatedAt'], as: 'comments' }] });
    res.json(new TweetsSerializer(myTweets, await req.getPaginationInfo(Tweets)));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createTweet,
  getTweetById,
  getAllMyTweets,
  deleteTweetById,
  TweetLike,
  createComents,
  getFeedUsername,
};
