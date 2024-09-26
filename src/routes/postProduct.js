const express = require("express");
const router = express.Router();
const { Products } = require("../models/modelProducts.js");
const auth = require("../middlewares/auth.js");
const { User } = require("../models/modelUser.js");

router.post("/", auth, async (req, res) => {
  const newProduct = req.body;
  const userId = req.user.userId;
  console.log("Données reçues :", newProduct);

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }
    const product = await Products.create({
      userId: userId,
      name: newProduct.name,
      url: newProduct.url,
      description: newProduct.description,
      image: newProduct.image,
      langage: newProduct.langage,
      categorie: newProduct.categorie,
    });
    res.status(201).json(product);
  } catch (error) {
    console.error("Erreur lors de l'ajout du produit :", error);
    res.status(500).json({ message: "Erreur lors de l'ajout du produit" });
  }
});

module.exports = router;
