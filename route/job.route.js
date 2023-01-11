const express = require("express");
const jobRoute = express.Router();
const { checkAuthorizationKey } = require("../config/jwt.config");
const { asyncHandler } = require("../error-handler");
const {upload } = require("../multer")
const {
  jobfileuplaodValidator , getjobappliedcandidate
} = require("../validator/job.validator");
const {
    addJobFileUplaod, getJobFileUplaod
} = require("../controller/job.ctrl");
jobRoute.get(
  "/",
  asyncHandler(checkAuthorizationKey),
  asyncHandler(getJobFileUplaod)
);

jobRoute.post(
  "/",
  upload.array("file",10),
  asyncHandler(checkAuthorizationKey),
  asyncHandler(jobfileuplaodValidator),
  asyncHandler(addJobFileUplaod),
);

module.exports = jobRoute;

