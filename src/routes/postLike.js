const express = require("express");
const router = express.Router();
const { Products } = require("../models/modelProducts.js");

router.post("/:id/like", async (req, res) => {
  const idProduct = req.params.id;

  try {
    const product = await Products.findByPk(idProduct);
    if (product) {
      product.likes += 1;
      await product.save();
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Produit non trouvé" });
    }
  } catch (error) {
    console.error("Erreur lors de l'ajout du like :", error);
    res.status(500).json({ message: "Erreur lors de l'ajout du like" });
  }
});

module.exports = router;
