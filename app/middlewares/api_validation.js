const cs_application_service = require('../service/dbquery/cs_application.service');
const cs_api_service = require('../service/dbquery/cs_api.service');
const cs_api_application_service = require('../service/dbquery/cs_api_application.service');
const { errorResponse } = require('../lib/response.handler');
const utils = require('../common/utils');
const commonService = require("../common/utils");
const hashing = require('../common/hashing');

exports.checkApp = async (req, res, next) => {
    const registeredApp = await cs_application_service.getOne({ env_id: req.body.env_id });
    if(req.body.env_id){
        await commonService.updateApiLogsData(
            {env_id: req.body.env_id,
            },
            { id:req.dataValues }
          );
    }
    
    if (registeredApp == null) {
        return errorResponse(req,res, 400, "APP has not been registered", {});
    }
    if (registeredApp.status == "inactive") {

        return errorResponse(req,res, 400, "APP is Inactive Please contact admin", {});

    }
    return next();
}


exports.checkapi = async (req, res, next) => {
    const activeAppApi = await cs_api_service.getOneApi({ app_api: req.originalUrl });
    if (activeAppApi == null) {
        return errorResponse(requestIdleCallback,res, 400, "API has not been configured", {});
    }
    if (activeAppApi.status == "inactive") {
        return errorResponse(req,res, 400, "API is Inactive", {});

    }
    return next();
}


exports.checkappApi = async (env_id, apiType) => {
    //let apiType = utils.removeSlash(req.url);
    const apiApplication = await cs_api_application_service.getOne({ env_id, type: apiType });
    if (apiApplication == null) {
        return {
            response_type: "error",
            responseCode: 400,
            responseMessage: `App has not been configured to ${apiType} API`
        }
    }
    if (apiApplication.status == "inactive") {
        return {
            response_type: "error",
            responsecode: 400,
            responseMessage: "API has been disabled for this app"
        }

    }

    return { response_type: "success" }
}