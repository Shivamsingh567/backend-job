const multer = require("multer");

var storage = multer.diskStorage({   
    destination: function(req, file, cb) { 
      cb(null , __dirname + '/uploads');   
    }, 
    filename: function (req, file, cb) { 
       cb(null , file.originalname);   
    }
 });
const config = {
    storage: storage,
    limits : {fileSize : 1000000}
  };
const upload = multer(config);

module.exports = {
  upload,
};