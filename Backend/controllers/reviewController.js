const Review = require('../models/reviewModel');
const APIFeatures = require('../utils/apifeatures');
const AppError = require('../utils/appError');

exports.getFiveStarReviews = (req, res, next) => {
  // try {
  // Set the query parameters
  req.query.limit = '5';
  req.query.sort = '-rating';
  req.query.fields = 'review, rating, tour, user';
  next();

  // Perform the aggregation to get 5-star reviews from distinct users
  //   const reviews = await Review.aggregate([
  //     // Match only 5-star reviews
  //     { $match: { rating: 5 } },

  //     // Group by user to ensure one review per user
  //     { $group: { _id: '$user', review: { $first: '$$ROOT' } } },

  //     // Limit to only 5 distinct users
  //     { $limit: 5 },
  //   ]);
  //   res.status(200).json({
  //     status: 'success',
  //     data: { reviews },
  //   });
  // } catch (err) {
  //   next(err); // Handle any errors
  // }
};

exports.getFiveStarReview = async (req, res, next) => {
  try {
    // Find 5-star reviews, populate user details, and limit to 100 reviews
    let reviews = await Review.find({ rating: 5 }).populate('user');

    // Manually ensure distinct users
    let distinctReviews = [];
    let usersSeen = new Set();

    // Loop through reviews and add to distinctReviews only if the user hasn't been seen before
    for (let review of reviews) {
      // Check if the review has a valid user before proceeding
      if (
        review.user &&
        review.user._id &&
        !usersSeen.has(review.user._id.toString())
      ) {
        distinctReviews.push(review);
        usersSeen.add(review.user._id.toString());
      }

      // Break the loop once 5 distinct reviews have been added
      if (distinctReviews.length === 5) break;
    }

    // Return the filtered distinct reviews
    res.status(200).json({
      status: 'success',
      data: { reviews: distinctReviews },
    });
  } catch (error) {
    // Handle errors gracefully and return them in the response
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
    next(error); // Pass the error to your error handling middleware
  }
};

exports.getAllReview = async (req, res, next) => {
  try {
    let filter = {};
    if (req.params.tourID) filter = { tour: req.params.tourID };
    const features = new APIFeatures(Review.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const reviews = await features.query;
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
