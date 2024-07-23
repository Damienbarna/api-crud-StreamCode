const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    req.isAuthenticated = false;
    return next();
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.isAuthenticated = true;
    req.user = decoded;
  } catch (error) {
    req.isAuthenticated = false;
  }

  next();
};
