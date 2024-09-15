const db = require('../model');
const sequelize = db.sequelize;
const { QueryTypes, Utils } = require("sequelize");
const User = db.user;
const UserProfile = db.userProfile

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({});

        //pagination
        // Project.findAll({ offset: 5, limit: 5 });

        return res.status(200).json({
            status: "success",
            message:"all users fetched",
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


const getSingleUser = async (req, res) => {
    try {
        const userId = req.params.userid;
        const users = await User.findAll({
            where: {
                id: userId
            },
            //attributes: ['id', 'lastName']
            include:[db.userProfile,db.blog]
        });
        //whichever attributes we will pass it will selet only that

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
        const { name,email,phone,password } = req.body;

        //creating a user first type
        const newUser = await User.build({
            name,
            email,
            phone,
            password
        });

        await newUser.save();
        console.log("new user", newUser);

        // Create a new user second type
        // const jane = await User.create({ firstName, lastName });
        // console.log("Jane's auto-generated ID:", jane.id);

        return res.status(200).json({
            status: "success",
            message:"user created successfully",
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

const getUserProfile = async (req, res) => {
    try {
        const userId = req.query.userid;
        const users = await UserProfile.findAll({
            where: {
                id: userId
            },
            //attributes: ['id', 'lastName']
            include:[db.user]
        });
        //whichever attributes we will pass it will selet only that

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

const createUserProfile = async (req, res) => {
    try {
        console.log(req.body);
        const { address,country,userid } = req.body;

        //creating a user first type
        const newUserProfile = await UserProfile.build({
            address,
            country,
            user_id:userid
        });

        await newUserProfile.save();
        console.log("new user profile", newUserProfile);

        // Create a new user second type
        // const jane = await User.create({ firstName, lastName });
        // console.log("Jane's auto-generated ID:", jane.id);

        return res.status(200).json({
            status: "success",
            message:"Profile created successfully",
            data: newUserProfile
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
    createUserProfile,
    getUserProfile,
    getSingleUser,
    getAllUsers,
    updateUser,
    deleteUser
}