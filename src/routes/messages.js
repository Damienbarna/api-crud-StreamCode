const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.get("/", async (req, res) => {
  const { roomId } = req.query; // Récupérer le paramètre roomId depuis les query params
  try {
    let messages;
    if (roomId) {
      // Récupérer les messages spécifiques à la roomId
      messages = await Message.findAll({ where: { roomId } });
    } else {
      // Si aucun roomId n'est spécifié, renvoyer tous les messages
      messages = await Message.findAll();
    }
    res.json(messages);
  } catch (error) {
    console.error("Erreur lors de la récupération des messages :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

module.exports = router;
