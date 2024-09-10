const db = require('../model');
const sequelize = db.sequelize;
const { QueryTypes, Utils } = require("sequelize");


const getAllUsers = async (req, res) => {
    try {
        const users = await db.User.findAll({
            where: {
                id: 2
            },
            attributes: ['id', 'lastName']
        });
        //whichever attributes we will pass it will selet only that

        //pagination
       // Project.findAll({ offset: 5, limit: 5 });

        return res.status(200).json({
            status: "success",
            data: users
        })

    } catch (err) {
        console.log('server error', err);
        return res.status(500).json({
            status: "failed",
            msg: err?.message
        })
    }
}

const createUser = async (req, res) => {
    try {
        console.log(req.body);
        const { firstName, lastName } = req.body;

        //creating a user first type
        const newUser = await db.User.build({
            firstName,
            lastName
        });

        await newUser.save();
        console.log("new user", newUser);

        // Create a new user second type
        const jane = await db.User.create({ firstName, lastName });
        console.log("Jane's auto-generated ID:", jane.id);

        return res.status(200).json({
            status: "success",
            data: newUser
        })

    } catch (err) {
        console.log('server error', err);
        return res.status(500).json({
            status: "failed",
            msg: err?.message
        })
    }
}

const updateUser = async (req, res) => {
    try {
        console.log(req.params)
        const updatedUser = await db.User.update({ lastName: "Doe" }, {
            where: {
                id: req.params.userid
            }
        });

        return res.status(200).json({
            status: "success",
            data: updatedUser
        })

    } catch (err) {
        console.log('server error', err);
        return res.status(500).json({
            status: "failed",
            msg: err?.message
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await db.User.destroy({
            where: {
              id: req.params.userid
            }
          });

        return res.status(200).json({
            status: "success",
            data: deletedUser
        })

    } catch (err) {
        console.log('server error', err);
        return res.status(500).json({
            status: "failed",
            msg: err?.message
        })
    }
}


//raw query
const updateCase = async (req) => {
    let today, query, where, params = [];
    try {
        today = dt.getCurrentDateTime();
        params.push(req.body.cl_claim_status);
        params.push(req.body.cl_claim_sub_status);
        params.push(today);
        params.push(req.decoded.id);
        params.push(req.id);
        query = "UPDATE " + c_table + " SET cl_claim_status = ?, cl_claim_sub_status = ?, modified = ?, modified_by = ? ";
        where = "WHERE id = ? ";
        req.db = {
            query: query,
            where: where,
            params: params
        };
        return await this.updateQuery(req);
    } catch (err) {
        return logger.dumpError(err);
    }
};

const updateQuery = async (req) => {
    let query, params, where, result;
    query = req.db.query;
    params = req.db.params;
    where = req.db.where;
    if (where)
        query += " " + where
    query += " LIMIT 1 ";
    const connection = await mysql.connection();
    try {
        result = await connection.query(query, params);
        if (result && result.changedRows === 1) {
            return req.response = {
                responseCode: 200,
                responseMessage: "Successfully done.",
                responseData: result
            }
        } else {
            return req.response = {
                responseCode: 0,
                responseMessage: "Unable to update data due to an error.",
                responseData: result
            }
        }

    } catch (err) {
        return logger.dumpDBError(err);
        // throw err;
    } finally {
        await connection.release();
    }
}




module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser
}