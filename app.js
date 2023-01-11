//#region <Library Imports>
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const apiRouter = require("./route/api.route");
const {
  OOPS_OVERWORKED,
  MONGO_SERVER_ERROR,
  PROGRAMMING_ERROR,
  SESSION_EXPIRE,
} = require("./constant/message");
require("./database/mongodb");
const app = express();
const http = require("http").createServer(app);
//#region <X-Powered-By>
app.use((req, res, next) => {
  res.setHeader("X-Powered-By", "SHIVAM");
  next();
});
app.use(express.json({ limit: "1024mb" }));

app.use(cors());

//#region <Helment Security Packages>
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.hsts());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.xssFilter());

//#region <Process Error handling>
process.on("uncaughtException", (err) => {
  //   logError(err);
  console.error("UNCAUGHT EXCEPTION! Shutting down...", err.name, err.message);
  process.exit(1);
});
process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION! Shutting down...", err.name, err.message);
  process.exit(1);
});
//#endregion

//#region <API Router>
app.use(apiRouter);

//error handling
app.use(function (err, req, res, next) {
  console.error(`\n${new Date()} : ${err.name} \n${err.message}`);
  const { name, message } = err;
  let status = 0,
    displayMsg = "";
  switch (name) {
    case "request entity too large":
      status = 400;
      displayMsg = OOPS_OVERWORKED;
      break;
    case "ValidationError":
      status = 400;
      displayMsg = message;
      break;
    case "MongoServerError":
      status = 500;
      displayMsg = MONGO_SERVER_ERROR;
      break;
    case "ReferenceError":
      status = 500;
      displayMsg = PROGRAMMING_ERROR;
      break;
    case "JsonWebTokenError":
      status = 403;
      displayMsg = message;
      break;
    case "ApiKeyError":
      status = 403;
      displayMsg = message;
      break;
    case "TokenExpiredError":
      status = 403;
      displayMsg = SESSION_EXPIRE;
      break;
    case "BSONTypeError":
      status = 400;
      displayMsg = message;
      break;
    case "Error":
      status = 400;
      displayMsg = message;
      break;
    default:
      status = 500;
      displayMsg = OOPS_OVERWORKED;
  }
  res.status(status).json({ message: displayMsg });
});
module.exports = http;
