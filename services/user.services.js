const { DbAddJobPost, DbGetJobData } = require("../models/user");

const ServiceAddJobPost = async (validateData) => {
    let response = {
        error: false,
        message: "",
        data: null,
    };
    try {
        let data = await DbAddJobPost(validateData);
        return data;
    } catch (error) {
        response["error"] = true;
        return (response["message"] = error);
    }
};
const ServiceGetJobPost = async (validateData) => {
    let find 
    let response = {
        error: false,
        message: "",
        data: null,
    };
    try {
        console.log('validateData', validateData)
        if ((validateData && validateData.skills) && (validateData && validateData.experienceLevel)) {
            find = {
                query: {
                    skills: validateData.skills ,
                    experienceLevel: validateData.experienceLevel
                },
                project: {
                    _id: 0,
                    createdTimestamp: 0,
                    __v: 0

                },
                multiple: true,
            }
        } else if  ((validateData && validateData.skills) ) {
            find = {
                query: {
                    skills: validateData.skills
                },
                project: {
                    _id: 0,
                    createdTimestamp: 0,
                    __v: 0

                },
                multiple: true,
            }
        } else if ((validateData && validateData.experienceLevel)) {
            find = {
                query: {
                    experienceLevel: validateData.experienceLevel
                },
                project: {
                    _id: 0,
                    createdTimestamp: 0,
                    __v: 0

                },
                multiple: true,
            }
        } else  {
            find = {
                project: {
                    _id: 0,
                    createdTimestamp: 0,
                    __v: 0

                },
                multiple: true,
            }
        }
        let data = await DbGetJobData(find);
        response["data"] = data;
        return response;
    } catch (error) {
        return (response["error"] = error);
    }
};
module.exports = {
    ServiceAddJobPost,
    ServiceGetJobPost,
};