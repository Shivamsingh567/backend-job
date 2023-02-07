const fs = require('fs');
const path = require('path')
const directory = './uploads/'
const { ServiceAddGoogleFileUplaod } = require("../services/google.services");
  const uploadFileToGoogle = async (req, res) => {
    console.log('00000000000000000000',req.file)
    console.log('11111111111111111111111',req.files)
    const addGoogleFile  = await ServiceAddGoogleFileUplaod({url:req.file.path, fileName: req.file.filename})
    console.log('22222222222222222222',addGoogleFile)
      const tempname = path.parse(req.file.path).name;
      const files =  await getFiles(tempname)
      console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',files)
      await dataDeleter(files)
      // const unlinkPromises = files.map(filename => fs.unlink(`${directory}/${filename}`));
      res.status(200).json({
        message: "success",
        data : addGoogleFile
      });
  };
  async function getFiles (fileNameStr) {
    console.log('getFiles >>>>>>>>>>>>>>>>>>>>>>>>>',)
    let data = [];
    try {
        let files = fs.readdirSync(directory);
        data = files.filter((file) => file.includes(fileNameStr));
        console.log('getFiles &&&&&&&&&&&&&&&&&',data)
    } catch (error) {
        console.error("Error at getFiles");
        console.log(error);
    }
    return data;
  };

  async  function dataDeleter(files) {
    return Promise.all(
      files.map(
        file =>
          new Promise((res, rej) => {
            try {
              fs.unlink(`${directory}/${file}`, err => {
                if (err) throw err;
                console.log(`${file} was deleted`);
                res();
              })
            } catch(err)  {
              console.error(err);
              rej(err);
            }
          })
        ))
  }
module.exports = {
  uploadFileToGoogle
};
  

