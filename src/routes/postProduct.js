const express = require("express");
const router = express.Router();
const { Products } = require("../models/modelProducts.js");

router.post("", async (req, res) => {
  const newProduct = req.body;
  const userId = req.user.id;
  console.log("Données reçues :", newProduct);

  try {
    const products = await Products.create({
      userId: userId,
      name: newProduct.name,
      url: newProduct.url,
      description: newProduct.description,
      image: newProduct.image,
      langage: newProduct.langage,
      categorie: newProduct.categorie,
    });
    res.status(201).json(products);
  } catch (error) {
    console.error("Erreur lors de l'ajout du produit :", error);
    res.status(500).json({ message: "Erreur lors de l'ajout du produit" });
  }
});

module.exports = router;
