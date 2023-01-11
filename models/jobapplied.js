const mongoose = require("../database/mongodb");
const maintenanceSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    jobId: { type: String, require: true },
    resumeUrl:  { type: String, require: true },
    coverUrl : { type: String, require: false },
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
let jobAppliedInformation = null;
try {
  jobAppliedInformation = mongoose.model("jobAppliedInformation");
} catch (error) {
  jobAppliedInformation = mongoose.model("jobAppliedInformation", maintenanceSchema);
}

const DbAddAppliedJobPost = async (body) => {
  const feedbackData = new jobAppliedInformation(body);
    const data = await feedbackData.save();
    return  data;
};

const DbGetAppliedJobData = async (body) => {
  let { multiple, query, project, sort, limit, skip } = body;
  multiple = multiple || false;
  query = query || {};
  project = project || {};
  sort = sort || {};
  limit = limit || 0;
  skip = skip || 0;
  let records = [];
  if (multiple) {
    records = await jobAppliedInformation.find(query, project);
  } else {
    records = await jobAppliedInformation.findOne(query, project).lean();
  }
  return records;
};
function printError(error) {
  console.log(`DB Error : ${error}`);
}
module.exports = {
    DbAddAppliedJobPost, DbGetAppliedJobData
};
