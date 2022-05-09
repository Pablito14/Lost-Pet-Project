const express = require("express");
const router = express.Router();
const {User,Pet} = require("../models");


//find all
router.get("/", (req, res) => {
  Pet.findAll({})
    .then(dbPets => {
      res.json(dbPets);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
//find one
router.get("/:id", (req, res) => {
  Pet.findByPk(req.params.id,{})
    .then(dbPet => {
      res.json(dbPet);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//create Pet
router.post("/", (req, res) => {
  if(!req.session.user){
    return res.status(401).json({msg:"ya gotta login to create a Pet post!"})
}
  Pet.create({
    title:req.body.title,
    body:req.body.body,
    UserId:req.session.user.id
  })
    .then(newPet => {
      res.json(newPet);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//update Pet
router.put("/:id", (req, res) => {
  Pet.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(updatedPet => {
    res.json(updatedPet);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

//delete a Pet
router.delete("/:id", (req, res) => {
  Pet.destroy({
    where: {
      id: req.params.id
    }
  }).then(delPet => {
    res.json(delPet);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

module.exports = router;
