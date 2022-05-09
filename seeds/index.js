const sequelize = require("../config/connection")
const {User,Pet} = require("../models")

const users = [
    {
        username:"Jeff",
        password:"password123",
        email:"jeff@jeff.com"
    },
    {
        username:"Bakary",
        password:"password123",
        email: "bakary@bakary.com"
    },
    {
        username:"Hayden",
        password:"password123",
        email: "hayden@hayden.com"
    },
    {
        username:"Pablito",
        password:"password123",
        email:"pablo@pablo.com"
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
        lastLocation: "address",
        lastTime: 11,
    },
    {
        name: "Floofy",
        petDescription: "Is a fat chocolate lab",
        currentStatus:true,
        animal: "Dog",
        breed: "Chocolate lab",
        color: "brown",
        lastLocation: "address",
        lastTime: 11,
    },
    {
        name: "Quiet cat",
        petDescription: "Is a quiet cat",
        currentStatus:false,
        animal: "cat",
        breed: "some sort of cat",
        color: "blue",
        lastLocation: "address",
        lastTime: 11,
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