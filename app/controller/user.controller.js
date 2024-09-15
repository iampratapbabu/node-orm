const db = require('../model');
const sequelize = db.sequelize;
const { QueryTypes, Utils } = require("sequelize");
const User = db.user;



const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
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
        const newUser = await User.build({
            firstName,
            lastName
        });

        await newUser.save();
        console.log("new user", newUser);

        // Create a new user second type
        const jane = await User.create({ firstName, lastName });
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
        const updatedUser = await User.update({ lastName: "Doe" }, {
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
        const deletedUser = await User.destroy({
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





module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser
}