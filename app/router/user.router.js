const express = require('express');
const userCtrl = require('../controller/user.controller');
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();


router.route("/")
.post(userCtrl.createUser)
.get(authMiddleware.protect,userCtrl.getAllUsers);

router.route("/login")
.post(userCtrl.loginUser)


router.route('/profile')
.get(userCtrl.getUserProfile)
.post(userCtrl.createUserProfile);

router.route("/:userid")
.get(userCtrl.getSingleUser)
.patch(userCtrl.updateUser)
.delete(userCtrl.deleteUser)

module.exports = router;