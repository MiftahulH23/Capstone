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
const kasir = require("./routes/kasir");
const supplier = require("./routes/supplier");
const pelanggan = require("./routes/pelanggan");
const produk = require("./routes/produk");
const bahanbaku = require("./routes/bahanbaku");


// use routes
app.use([user, kasir, supplier, pelanggan, produk, bahanbaku]);