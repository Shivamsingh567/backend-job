
const {
  ServiceAddGoogleFileUplaod
  } = require("../services/google.services");
  //start of function
  const uploadFileToGoogle = async (req, res) => {
    console.log('00000000000000000000',req.file)
    console.log('11111111111111111111111',req.files)
    const addGoogleFile  = await ServiceAddGoogleFileUplaod({url:req.file.path, fileName: req.file.fileName})
    console.log('22222222222222222222',addGoogleFile)
    res.status(200).json({
        message: "success",
        data : addGoogleFile
      });
  };

  module.exports = {
    uploadFileToGoogle
  };
  

