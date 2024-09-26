const express = require("express");
const router = express.Router();
const User = require("../models/modelUser");

router.get("/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId, {
      attributes: ["name", "imageUrl"],
    });

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    res.status(200).json({ name: user.name, imageUrl: user.imageUrl });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération du nom d'utilisateur :",
      error
    );
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
