const mongoose = require("../database/mongodb");
const maintenanceSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    email: { type: String, require: true },
    description: { type: String, require: true },
    jobId: { type: String, require: true },
    skills : { type: Array, require: false },
    experienceLevel : { type: Number, require: false },
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
let jobInformation = null;
try {
  jobInformation = mongoose.model("jobInformation");
} catch (error) {
  jobInformation = mongoose.model("jobInformation", maintenanceSchema);
}

const DbAddJobPost = async (body) => {
  const feedbackData = new jobInformation(body);
    const data = await feedbackData.save();
    return  data;
};

const DbGetJobData = async (body) => {
  let { multiple, query, project, sort, limit, skip } = body;
  multiple = multiple || false;
  query = query || {};
  project = project || {};
  sort = sort || {};
  limit = limit || 0;
  skip = skip || 0;
  let records = [];
  if (multiple) {
    records = await jobInformation.find(query, project);
  } else {
    records = await jobInformation.findOne(query, project).lean();
  }
  return records;
};
function printError(error) {
  console.log(`DB Error : ${error}`);
}
module.exports = {
    DbAddJobPost, DbGetJobData
};
