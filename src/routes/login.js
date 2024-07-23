const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/modelUser");
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "secret";

router.post("/", async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res
      .status(400)
      .json({ message: "Nom d'utilisateur et mot de passe sont requis" });
  }

  try {
    const user = await User.findOne({ where: { name } });
    if (!user) {
      return res.status(400).json({ message: "Utilisateur non trouvé" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Mot de passe incorrect" });
    }

    const token = jwt.sign({ userId: user.id, name: user.name }, secret, {
      expiresIn: "1h",
    });

    console.log("Connexion réussie pour l'utilisateur :", user.name);
    res.status(200).json({
      message: "Connexion réussie",
      token,
      user: { id: user.id, name: user.name },
    });
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    res.status(500).json({ message: "Erreur lors de la connexion" });
  }
});

module.exports = router;
