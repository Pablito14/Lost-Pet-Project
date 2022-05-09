const express = require("express");
const router = express.Router();
const {User, Pet} = require("../models/");
const bcrypt  = require("bcrypt");

//find all
router.get("/", (req, res) => {
  Pet.findAll({
    // include:[User]
  })
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
  Pet.create(req.body)
    .then(newPet => {
      req.session.Pet = {
        id:newPet.id,
        Petname:newPet.Petname
      }
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
