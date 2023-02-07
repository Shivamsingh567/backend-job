const multer = require("multer");
const shortid = require("shortid");
const path = require("path");
const multerGoogleStorage = require("multer-google-storage");
const GoogleKeyFileName="/etc/coutloot/files/googleCloud.json";
const GoogleCreds=require(GoogleKeyFileName);
const GoogleProjectId=GoogleCreds.project_id;
const GoogleCDN=GoogleCreds.cdn_uri;

// const StorageObject = new Storage({
//     projectId: GoogleProjectId,
//     keyFilename: GoogleKeyFileName 
// });
// [authenticatedread, bucketownerfullcontrol, bucketownerread, private, projectprivate, publicread]


// const config = {
//   storage: multerGoogleStorage.storageEngine({
//     autoRetry: true,
//     acl:"private",
//     bucket: "coutloot-cdn1-bucket-new",
//     projectId: GoogleCreds.project_id,
//     keyFilename: GoogleKeyFileName ,
//     filename: function (req, file, cb) {
//       const prefixPath = "upload/";
//       const f =
//         Date.now().toString() +
//         "_" +
//         shortid.generate() +
//         path.extname(file.originalname);
//       console.log(
//         "path.format",
//         path.format({
//           root: prefixPath,
//           base: f,
//           ext: "ignored",
//         })
//       );
//       cb(
//         null,
//         path.format({
//           root: prefixPath,
//           base: f,
//           ext: "ignored",
//         })
//       );
//     },
//   }),
// };
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, "/var/coutlootFiles");
    cb(null, "./uploads")   
  },
  tempName: Math.random().toString(36).substr(2),
  filename: function (req, file, cb) {
    let tempName=Math.random().toString(36).substr(2);
    cb(null, tempName+"_"+Date.now() +  path.extname(file.originalname));
  }
});

var upload = multer({
  storage: storage
});

// const upload = multer(config);

module.exports = {
  upload,
};
