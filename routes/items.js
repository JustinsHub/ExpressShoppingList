const express = require('express')
const router = new express.Router();

router.get('/', (req, res, next)=>{
    return res.json({name:"Dexter"})
})

module.exports = router;