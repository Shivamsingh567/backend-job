const mongoose = require("../database/mongodb");
const maintenanceSchema = mongoose.Schema(
  {
    url: { type: String, require: true },
    fileName: { type: String, require: true }
  },
  {
    timestamps: {
      createdAt: "createdTimestamp",
      updatedAt: false,
    },
  }
);
/**
 * @type {mongoose.Model}
 */
let UplaodFileToGoogle = null;
try {
  UplaodFileToGoogle = mongoose.model("UplaodFileToGoogle");
} catch (error) {
  UplaodFileToGoogle = mongoose.model("UplaodFileToGoogle", maintenanceSchema);
}

const DbAddGoogleFileUplaod = async (body) => {
  const feedbackData = new UplaodFileToGoogle(body);
    const data = await feedbackData.save();
    return  data;
};

function printError(error) {
  console.log(`DB Error : ${error}`);
}
module.exports = {
    DbAddGoogleFileUplaod
};
