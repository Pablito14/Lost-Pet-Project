const express = require('express');
const router = express.Router();
const {User,Pet} = require('../models');

router.get("/",(req,res)=>{
    Blog.findAll().then(blogs=>{
        const hbsBlogs = blogs.map(blog=>blog.get({plain:true}))
        res.render("home",{blogs:hbsBlogs})
    })
})

router.get("/login",(req,res)=>{
    // if they are logged in
    if(req.session.user){
        //allows access to the right spot
        res.redirect()
    }
    // if they arent logged in, send them to the login page
    res.render("login")
})

module.exports = router;