const express = require("express");
const app = express();
const cors = require("cors");
const getProducts = require("./src/routes/getProducts");
const postProduct = require("./src/routes/postProduct");
const deleteProduct = require("./src/routes/deleteProducts");
const updateProduct = require("./src/routes/updateProducts");
const signup = require("./src/routes/signup");
const login = require("./src/routes/login");
const authMiddleware = require("./src/routes/login");

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/signup", signup);
app.use("/login", login);

app.use(authMiddleware);

app.use("/products", getProducts);
app.use("/addproduct", postProduct);
app.use("/deleteproduct", deleteProduct);
app.use("/updateproduct", updateProduct);

app.use((req, res) =>
  res.status(404).json({ msg: "This route does not exists" })
);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
