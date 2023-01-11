var express = require("express");
const apiRouter = express.Router();

const indexRouter = require("./user.route");
const jobAppliedRoutes = require("./job.route");
apiRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Powered by Shivam" });
});

apiRouter.use("/job", indexRouter);
apiRouter.use("/appliedjob", jobAppliedRoutes)

module.exports = apiRouter;
