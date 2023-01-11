const express = require("express");
const userRoute = express.Router();
const { checkAuthorizationKey } = require("../config/jwt.config");
const { asyncHandler } = require("../error-handler");
const {
  addJobPostDataValidator, getJobPostDataValidator
} = require("../validator/user.validator");
const {
  addJobPostData,
  getJobPostData,
} = require("../controller/user.ctrl");
userRoute.get(
  "/",
  asyncHandler(checkAuthorizationKey),
  asyncHandler(getJobPostDataValidator),
  asyncHandler(getJobPostData)
);

userRoute.post(
  "/",
  asyncHandler(checkAuthorizationKey),
  asyncHandler(addJobPostDataValidator),
  asyncHandler(addJobPostData)
);

module.exports = userRoute;

