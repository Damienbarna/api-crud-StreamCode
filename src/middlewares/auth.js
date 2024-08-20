const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "secret";

module.exports = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  console.log("Token reçu:", token);

  if (!token) {
    return res.status(401).json({ error: "Accès non autorisé" });
  }

  try {
    const decoded = jwt.verify(token, secret);
    console.log("Token décodé:", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Erreur de validation du token:", error);
    res.status(401).json({ error: "Token invalide" });
  }
};
