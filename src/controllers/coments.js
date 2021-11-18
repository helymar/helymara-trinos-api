const ApiError = require('../utils/ApiError');

const { Comments } = require('../database/models');

const ComentsSerializer = require('../serializers/ComentsSerializer');

const findcoments = async (where) => {
  Object.assign(where);

  const comments = await Comments.findOne({ where });
  if (!comments) {
    return [];
  }
  return comments;
};

const deleteCommentsById = async (req, res, next) => {
  try {
    const { params } = req;

    const tweetId = Number(params.id);
    const mycomment = await findcoments({ id: tweetId });
    if (mycomment.length !== 0) {
      const comments = await Comments.destroy({ where: { id: tweetId } });
      res.json(new ComentsSerializer(null));
    } else {
      throw new ApiError('Comments not found', 404);
    }
  } catch (err) {
    next(err);
  }
};

const CommentsLike = async (req, res, next) => {
  try {
    const { params } = req;

    const Idtweet = Number(params.id);

    const comments = await findcoments({ id: Idtweet });

    const tweetPayload = {
      likeCounter: comments.dataValues.likeCounter + 1,
    };

    Object.assign(comments, tweetPayload);

    await comments.save();

    res.json(new ComentsSerializer(comments));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  deleteCommentsById,
  CommentsLike,
};
