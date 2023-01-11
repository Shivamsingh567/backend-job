const jwt = require("jsonwebtoken");

module.exports = {
  genToken: function (payload, expiresInTime) {
    return new Promise(function (resolve, reject) {
      jwt.sign(
        { payload },
        process.env.JWT_SECRET,
        { expiresIn: expiresInTime },
        function (err, token) {
          if (err) {
            reject(err);
          } else {
            resolve(token);
          }
        }
      );
    });
  },


  generateToken: function (payload, secret, options) {
    return new Promise(function (resolve, reject) {
      try {
        jwt.sign({ payload }, secret, options, function (err, token) {
          if (err) {
            reject(err);
          } else {
            resolve(token);
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  },

  checkToken: function (req, res, next) {
    try {
      const header = req.headers.authorization;

      if (typeof header !== "undefined" && header.length !== 0) {
        const bearer = header.split(" ");
        const token = bearer[1];
        jwt.verify(
          token,
          process.env.JWT_SECERT,
          async function (err, authorizedata) {
            if (err) {
              if (err.name === "TokenExpiredError") {
                return res.status(403).json({ message: [err.message] });
              } else if (err.name === "JsonWebTokenError") {
                return res.status(403).json({ message: ["Token malformed!"] });
              }
            } else {
              req.payload = authorizedata;
              next();
            }
          }
        );
      } else {
        return res.status(403).json({ message: ["Authorization failed."] });
      }
    } catch (error) {
      return res.status(400).json({ message: [error.message] });
    }
  },

  checkAuthorizationKey: function (req, res, next) {
    try {
      const { access_key } = req.headers;
      console.log('111111111111111',access_key)
      console.log('22222222222222',process.env.AUTHORIZATION)
      if (
        access_key !== process.env.AUTHORIZATION
      ) {
        res.status(403).json({ message: ["Invalid access key."] });
      } else {
        next();
      }
    } catch (error) {
      console.log("error", error);
      res.status(400).json({
        message: [
          "Oops! Looks like the servers are overworked. Please try again later.",
        ],
      });
    }
  },
};
