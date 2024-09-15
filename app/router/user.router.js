const express = require('express');
const userCtrl = require('../controller/user.controller');
const router = express.Router();


router.route("/")
.post(userCtrl.createUser)
.get(userCtrl.getAllUsers);

router.route('/profile')
.get(userCtrl.getUserProfile)
.post(userCtrl.createUserProfile);

router.route("/:userid")
.get(userCtrl.getSingleUser)
.patch(userCtrl.updateUser)
.delete(userCtrl.deleteUser)

module.exports = router;