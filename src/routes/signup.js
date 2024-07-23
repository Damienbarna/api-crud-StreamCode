const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/modelUser");

router.post("/", async (req, res) => {
  const { name, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Mot de passe haché :", hashedPassword);
    const user = await User.create({
      name,
      password: hashedPassword,
    });
    res.status(201).json(user);
  } catch (error) {
    console.error("Erreur lors de l'enregistrement :", error);
    res.status(500).json({ message: "Erreur lors de l'enregistrement" });
  }
});

module.exports = router;
