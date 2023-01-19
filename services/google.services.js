const { DbAddGoogleFileUplaod } = require("../models/uploadFile");

const ServiceAddGoogleFileUplaod = async (validateData) => {
    let response = {
        error: false,
        message: "",
        data: null,
    };
    try {
        let data = await DbAddGoogleFileUplaod(validateData);
        return data;
    } catch (error) {
        response["error"] = true;
        return (response["message"] = error);
    }
};

module.exports = {
    ServiceAddGoogleFileUplaod
};