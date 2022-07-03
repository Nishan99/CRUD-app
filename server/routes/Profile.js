const express = require("express");
const router = express.Router();
const { Profile } = require("../models");

router.get("/", async (req, res) => {
  const userData = await Profile.findAll();
  res.json(userData);
});

router.get("/view/:id", async (req, res) => {
  const id = req.params.id;
  const userData = await Profile.findAll({
    where: {
      id: id,
    },
  });
  res.json(userData);
});

router.get("/get/:id", async (req, res) => {
  const id = req.params.id;
  const userData = await Profile.findOne({
    where: {
      id: id,
    },
  });
  res.json(userData);
});


router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const userInfo = req.body;
  const userData = await Profile.findAll({
    where: {
      id: id,
    },
  });

  if (userData) {
  await Profile.update(userInfo, { where: { id: id } });
    res.json("User Information Updated");
  } else {
    res.json("Unable to Update Information");
  }
});


router.delete('/delete/:id', async (req,res)=>{
  const id = req.params.id

  await Profile.destroy({
    where:{
      id:id
    }
  })

  res.send("user deleted sucessfully")
})


router.post("/", async (req, res) => {
  const userData = await req.body;
  const findUser = await Profile.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (findUser) {
    res.json({ error: "user already exist choose another email" });
  } else {
    await Profile.create(userData);
    res.json({ success: "user registered sucessfully " });
  }
});

router.post("/user", async (req, res) => {
  const userOne = await req.body.email;
  const findOneUser = await Profile.findOne({
    where: {
      email: userOne,
    },
  });

  if (!findOneUser) {
    res.json({ failure: "user don't exist" });
  } else {
    res.json(findOneUser);
  }
});

router.post("/login", async (req, res) => {
  const { username } = await req.body;
  const person = await Profile.findOne({
    where: {
      email: username,
    },
  });

  if (!person) {
    res.json({ failure: "user not found" });
  } else {
    res.json(person);
  }
});

module.exports = router;
