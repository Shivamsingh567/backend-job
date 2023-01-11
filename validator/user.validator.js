const Joi = require("./validator");
const addJobPostData = Joi.object({
  title: Joi.string().required(),
  email : Joi.string().required(),
  description:  Joi.string().required(),
  skills : Joi.array().items(Joi.string()).optional(),
  experienceLevel : Joi.number().optional(),
});

const addJobPostDataValidator = async (req, res, next) => {
    console.log('addJobPostData validator',req.body)
  req.body = await addJobPostData.validateAsync(req.body);
  console.log('addJobPostData after',req.body)
  next();
};
const getJobPostData = Joi.object({
    skills : Joi.string().optional(),
    experienceLevel : Joi.number().optional(),
  });
const getJobPostDataValidator = async (req, res, next) => {
    console.log('getJobPostDataValidator validator',req.body)
    req.body = await getJobPostData.validateAsync(req.body);
    console.log('getJobPostDataValidator after',req.body)
    next();
}
module.exports = {
    addJobPostDataValidator,
    getJobPostDataValidator
};
