const express = require("express");
const router = express.Router();
const { Products } = require("../models/modelProducts.js");

router.get("/:limite", async (req, res) => {
  try {
    const limit = parseInt(req.params.limite, 20);
    const product = await Products.findAll({ limit: limit });
    if (!product) {
      return res.status(404).json({ error: "Produits non trouvés" });
    }
    res.json(product);
  } catch (error) {
    console.error("Erreur lors de la récupération des produits :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

router.get("/all", async (req, res) => {
  const userId = req.user.id;
  try {
    const product = await Products.findAll({ where: { userId: userId } });
    res.json(product);
  } catch (error) {
    console.error("Erreur lors de la récupération des produits :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

module.exports = router;
