const Joi = require("joi");
const MyJoi = Joi.defaults((schema) =>
  schema.options({
    errors: {
      wrap: {
        label: " ",
      },
    },
  })
);
module.exports = MyJoi;
