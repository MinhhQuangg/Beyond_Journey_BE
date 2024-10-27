const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'Please give some decription for the tour'],
    },
    rating: {
      type: Number,
      default: 3,
      max: 5,
      min: 1,
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      required: [true, 'Review must belong to a tour'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user'],
    },
  },
  {
    toJSON: { viruals: true },
    toObject: { virtuals: true },
  },
);

reviewSchema.pre(/^find/, function (next) {
  this
    //   populate({ path: 'tour', select: 'name' }).
    .populate({
      path: 'user',
      select: 'name photo',
    });
  next();
});

const Review = new mongoose.model('Review', reviewSchema);
module.exports = Review;
