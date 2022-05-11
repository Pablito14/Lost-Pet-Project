const { Router } = require("express")
const sequelize = require("../config/connection")
const {User,Pet} = require("../models")

const users = [
    {
        username:"Jeff",
        password:"password123",
        email: "joel@go.com"
    },
    {
        username:"Bakary",
        password:"password123",
        email: "bak@go.com"
    },
    {
        username:"Hayden",
        password:"password123",
        email: "lora@go.com"
    },
    {
        username:"Pablito",
        password:"password123",
        email: "Mar@go.com"
    }
]

const pets = [
    {
        name: "Fluffy",
        petDescription: "Is a fat golden retriever",
        currentStatus:true,
        animal: "Dog",
        breed: "Golden Retriever",
        color: "Yellow",
        lastLocation: "47.380748, -122.233538        ",
        lastTime: 11,
        user_id:1,
    },
    {
        name: "Floofy",
        petDescription: "Is a fat chocolate lab",
        currentStatus:true,
        animal: "Dog",
        breed: "Chocolate lab",
        color: "brown",
        lastLocation: "47.575856, -122.401139",
        lastTime: 11,
        user_id:2,
    },
    {
        name: "Quiet cat",
        petDescription: "Is a quiet cat",
        currentStatus:false,
        animal: "cat",
        breed: "some sort of cat",
        color: "blue",
        lastLocation: "47.282139, -122.200083",
        lastTime: 11,
        user_id:3,
    }
    
]

const feedMe = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Pet.bulkCreate(pets);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

feedMe()

