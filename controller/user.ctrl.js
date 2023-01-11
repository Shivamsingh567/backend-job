const shortid = require('shortid');
const {
    ServiceAddJobPost,
    ServiceGetJobPost,
  } = require("../services/user.services");
  //start of function
  const addJobPostData = async (req, res) => {
    req.body.jobId =  shortid.generate()
    const addJobpost = await ServiceAddJobPost(req.body)
    console.log('1111111111111111111111',addJobpost)
    res.status(200).json({
        message: "success",
        data : addJobpost
      });
  };
  const getJobPostData = async  (req, res) => {
    const  getJobpost = await ServiceGetJobPost(req.body || {})
    res.status(200).json({
        message: "success",
        data : getJobpost.data || []
      });
  };
  module.exports = {
    addJobPostData,
    getJobPostData,
  };
  

