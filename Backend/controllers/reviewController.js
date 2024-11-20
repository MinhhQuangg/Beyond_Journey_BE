const Review = require('../models/reviewModel');
const AppError = require('../utils/appError');

exports.getFiveStarRviews = async (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-rating';
  req.query.fields = 'review, rating, tour, user';
  next();
};

exports.getAllReview = async (req, res, next) => {
  try {
    let filter = {};
    if (req.params.tourID) filter = { tour: req.params.tourID };
    const reviews = await Review.find(filter);
    res.status(200).json({
      status: 'success',
      length: reviews.length,
      data: { reviews },
    });
  } catch (err) {
    next(err);
  }
};

exports.setTourUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourID;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.createReview = async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json({
      status: 'success',
      data: { review: newReview },
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    //!if using 204 => cant see any body message in response
    res.status(200).json({ status: 'success', data: null });
  } catch (err) {
    next(err);
  }
};

exports.updateReview = async (req, res, next) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!review) {
      return next(new AppError('Review not found', 404));
    }
    res.status(200).json({ status: 'success', data: { review } });
  } catch (err) {
    next(err);
  }
};

exports.getReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return next(new AppError('Review not found', 404));
    }
    res.status(200).json({
      status: 'success',
      data: { review },
    });
  } catch (err) {
    next(err);
  }
};
