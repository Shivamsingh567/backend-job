const Joi = require("./validator");
const jobfileuplaodData = Joi.object({
  name : Joi.string().required(),
  email : Joi.string().required(),
  jobId: Joi.string().required(),
  resumeUrl:  Joi.string().required(),
  coverUrl : Joi.string().optional(),
});

const jobfileuplaodValidator = async (req, res, next) => {
    console.log('222222222222222222222222222222222',req.files)
    if (req.files && req.files.length) {
        req.body.resumeUrl =  req.files[0].path
        req.body.coverUrl =  req.files[1]?.path || ''
        console.log('addJobPostData after',req.body)
        req.body = await jobfileuplaodData.validateAsync(req.body);
        console.log('addJobPostData after',req.body)
        next();
    } else  {
        return res.status(400).json({ message: "Please provide resume" });
    }
  
};


module.exports = {
    jobfileuplaodValidator ,
};
