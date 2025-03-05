const commonService = require("../common/utils");
const httpStatus = require("http-status");
const jwt = require('jsonwebtoken');

exports.cratelogtable = async (req, res, next)=>{
    try{
        const saveApiLog = await commonService.createApiLogs(req);
        req.dataValues=saveApiLog.dataValues.id;
        return next();
    }
    catch(error){
        return res.status(500).json({
        status: 'Failed',
        msg: error.message,
        });
    }
}