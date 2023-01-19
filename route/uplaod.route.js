const express = require("express");
const uploadRoute = express.Router();
const { checkAuthorizationKey } = require("../config/jwt.config");
const { asyncHandler } = require("../error-handler");

const {
  uploadFileToGoogle
} = require("../controller/upload.ctrl");
const { upload } = require("../multer");

uploadRoute.post(
  "/",
  upload.single("image"),
  asyncHandler(uploadFileToGoogle)
);

module.exports = uploadRoute;

