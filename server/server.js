const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// get driver conection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});

// get routes
const user = require("./routes/user");
const cashier = require("./routes/kasir");
const supplier = require("./routes/supplier");
const customer = require("./routes/pelanggan");
const product = require("./routes/produk.js");
const material = require("./routes/bahanbaku");
const productsOrders = require("./routes/productsOrders");
const materialsOrders = require("./routes/materialsOrders");

// use routes
app.use([user, cashier, supplier, customer, product, material, productsOrders, materialsOrders]);