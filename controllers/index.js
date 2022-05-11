const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/users",userRoutes)

const petRoutes = require("./petRoutes");
router.use("/api/pets",petRoutes)

// const imageRoutes = require("./imageRoutes");
// router.use("/api/images",imageRoutes)

// const browseRoute = require("./imageRoutes");
// router.use("/api/images",imageRoutes)

router.get("/showsessions",(req,res)=>{
    res.json(req.session)
})

// router.get("/setfaveanimal/:faveanimal",(req,res)=>{
//     req.session.favAnimal = req.params.faveanimal;
//     console.log(req.session);
//     res.json(req.session);
// })
// router.get("/secretclub",(req,res)=>{
//     if(!req.session.user){
//         return res.status(401).json({msg:"ya gotta login to join the club!"})
//     }
//     res.json({msg:`welcome to the club ${req.session.user.username}`})
// })



module.exports = router;