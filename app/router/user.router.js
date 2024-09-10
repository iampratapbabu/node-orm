const express = require('express');
const { createUser ,getAllUsers, updateUser, deleteUser} = require('../controller/user.controller');
const router = express.Router();


router.route("/")
.post(createUser)
.get(getAllUsers)

router.route("/:userid")
.patch(updateUser)
.delete(deleteUser)

module.exports = router;