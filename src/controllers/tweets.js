const ApiError = require('../utils/ApiError');

const { Tweets, User } = require('../database/models');
const { generateAccessToken } = require('../services/jwt');

const TweetSerializer = require('../serializers/TweetSerializer');
const AuthSerializer = require('../serializers/AuthSerializer');
const TweetsSerializer = require('../serializers/TweetsSerializer');

const { ROLES } = require('../config/constants');

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

  const user = await User.findOne({attributes: {exclude: ['password', 'role', 'active']},where});
  if (!user) {
    throw new ApiError('User not found', 404);
  }

  return user;
};

const getAllMyTweets = async (req, res, next) => {
  try {
    req.isUserAuthorized(userId);
    const where ={ 
      userId: req.user.id,
    }
    const myTweets = await Tweets.findAll({where, ...req.pagination});
    res.json(new TweetsSerializer(myTweets, await req.getPaginationInfo(Tweets)));
  } catch (err) {
    next(err);
  }
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
      throw new ApiError('error', 400);
    }

    let Tweet = await Tweets.create(tweetPayload, );
    const user = await findUser(req.user.id);
    Tweet.dataValues.user=user.dataValues;
    Tweet.dataValues.comments=[];
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
    if(mytweet.dataValues.userId===req.user.id){
    const Tweet = await Tweets.destroy({where: { id: tweetId } });
    console.log(Tweet);
    res.json(new TweetSerializer(null));
    }else{
      throw new ApiError("Tweet not found", 404);
    }
    
  } catch (err) {
    next(err);
  }
};


module.exports = {
  createTweet,
  getTweetById,
  getAllMyTweets,
  deleteTweetById
};
