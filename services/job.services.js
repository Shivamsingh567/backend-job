const { DbAddAppliedJobPost, DbGetAppliedJobData } = require("../models/jobapplied");

const ServiceAddJobFileUplaod = async (validateData) => {
    let response = {
        error: false,
        message: "",
        data: null,
    };
    try {
        let data = await DbAddAppliedJobPost(validateData);
        return data;
    } catch (error) {
        response["error"] = true;
        return (response["message"] = error);
    }
};
const ServiceGetJobFileUplaod = async (validateData) => {
    let response = {
        error: false,
        message: "",
        data: null,
    };
    try {
        let data = await DbGetAppliedJobData({ 
            project: {
            _id: 0,
            createdTimestamp: 0,
            __v: 0

        },
        multiple: true,
    });
        response["data"] = data;
        return response;
    } catch (error) {
        return (response["error"] = error);
    }
};
module.exports = {
    ServiceAddJobFileUplaod,
    ServiceGetJobFileUplaod,
};