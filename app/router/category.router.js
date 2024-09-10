const express = require('express');
const router = express.Router();


router.get("/",(req,res)=>{
    res.send("category routes working");
});

module.exports = router;