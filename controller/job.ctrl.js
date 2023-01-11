
const {
    ServiceAddJobFileUplaod,
    ServiceGetJobFileUplaod,
  } = require("../services/job.services");
  //start of function
  const addJobFileUplaod = async (req, res) => {
    const addJobpost = await ServiceAddJobFileUplaod(req.body)
    console.log('1111111111111111111111',addJobpost)
    res.status(200).json({
        message: "success",
        data : addJobpost
      });
  };
  const getJobFileUplaod = async  (req, res) => {
    const  getJobpost = await ServiceGetJobFileUplaod()
    res.status(200).json({
        message: "success",
        data : getJobpost.data || []
      });
  };
  module.exports = {
    addJobFileUplaod, getJobFileUplaod
  };
  

