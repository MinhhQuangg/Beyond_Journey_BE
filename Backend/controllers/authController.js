const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const AppError = require('./../utils/appError');
const SentEmail = require('./../utils/email');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      passwordChangedAt: req.body.passwordChangedAt,
      role: req.body.role,
    });

    const token = signToken(newUser._id);

    res.status(201).json({
      status: 'success',
      token,
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // 1) Check if email and password exist
    if (!email || !password) {
      return next(new AppError('Please provide email and password!', 400));
    }
    // 2) Check if user exists and password is correct
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeawwwwwwwwwwwwwwwaaaaa;
      return next(new AppError('Incorrect email or password', 401));
    }

    // 3) If everything ok, send token to client
    const token = signToken(user.id);
    res.status(200).json({
      status: 'success',
      token,
    });
  } catch (err) {
    next(err);
  }
};

exports.protect = async (req, res, next) => {
  //TODO: 1) Getting token and check if it's there
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
      return next(
        new AppError('Your are not logged in! Please log in to get access'),
        401,
      );
    }

    //TODO: 2) Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    //TODO: 3) Check if user still exists
    const freshUser = await User.findById(decoded.id);
    if (!freshUser) {
      return next(
        new AppError(
          'The user belonging to this token does no longer exist',
          401,
        ),
      );
    }
    //TODO: 4) Check if user changed password after the token was issued
    if (freshUser.changePasswordAfter(decoded.iat)) {
      return next(
        new AppError(
          'User recently changed password! Please log in again',
          401,
        ),
      );
    }

    req.user = freshUser;
    next();
  } catch (err) {
    next(err);
  }
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403),
      );
    }
    next();
  };
};

exports.forgotPassword = async (req, res, next) => {
  let user;
  try {
    //TODO 1) Get user based on Posted email
    user = await User.findOne({ email: req.body.email });
    if (!user) {
      return next(new AppError('There is no user with email address', 404));
    }
    //TODO 2)Generate random reset token
    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });

    //TODO 3) send it to user's email
    console.log(res.get('host'));
    const resetURL = `${req.protocol}://${req.get('host')}/api/v1/users/resetPassword/${resetToken}`;
    const message = `Forgot your password? Submit a Patch request with your new password and passwordConfirm to: ${resetURL}.\n Please ignore this email if you did not forget your password `;

    await SentEmail({
      email: user.email,
      subject: 'Your password reset token only valid for 10 mins',
      message,
    });
    res.status(200).json({
      status: 'success',
      message: 'Token sent to email!',
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(
      new AppError(
        'There was an error sending the email. Please try again later!',
      ),
    );
  }
};

exports.resetPassword = (req, res, next) => {};
