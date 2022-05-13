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
        name: "Happy",
        petDescription: "Despite their bulging eyes and preferred diet of crickets they make them some of the cutest reptiles that can be kept as pets. ",
        currentStatus:true,
        animal: "Reptile",
        breed: "Crested Gecko ",
        color: "Brownish/Gold",
        lastLocation: "47.380748, -122.233538        ",
        lastTime: 11,
        user_id:1,
        picture: "https://www.thesprucepets.com/thmb/KqW7fMHRP92TzAxugjdw1oJzQRM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/19744i650453198D28FD08-5af06caf119fa80037a6ecf6.jpg"
    },
    {
        name: "Pickles",
        petDescription: "The Labrador Retriever or Labrador is a British breed of retriever gun dog.",
        currentStatus:true,
        animal: "Dog",
        breed: "Chocolate Labrador",
        color: "Brown",
        lastLocation: "47.575856, -122.401139",
        lastTime: 11,
        user_id:2,
        picture: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Cute-Puppy-Background-Download-Free-1.jpg"
    },
    {
        name: "Smolly",
        petDescription: "Domestic cats are often called 'house cats' when kept as indoor pets.",
        currentStatus:false,
        animal: "Cat",
        breed: "Felis catus",
        color: "Yellowish/Orange",
        lastLocation: "47.282139, -122.200083",
        lastTime: 11,
        user_id:3,
        picture: "https://cutecatshq.com/wp-content/uploads/2018/10/So-smol.jpg"
    },
    {
        name: "Nibbles",
        petDescription: "Guinea pigs need large open air cages in which to romp and frolic.",
        currentStatus:false,
        animal: "Guinea Pig",
        breed: "Cavia porcellus",
        color: "Brown and White",
        lastLocation: "47.7623204, -122.2054035",
        lastTime: 11,
        user_id:4,
        picture: "https://1.bp.blogspot.com/-0wZKJapkzss/UQq3qQHMXNI/AAAAAAAABbE/abwq7U1z4dQ/s1600/Cute-Guinea-Pig-2048x2048.jpgg"
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

