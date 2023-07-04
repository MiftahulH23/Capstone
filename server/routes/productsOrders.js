const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/order/product").get(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  db_connect
    .collection("productsOrders")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('productsOrders berhasil ditampilkan')
      res.json({
        message: "productsOrders berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/order/product/:id").get(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("productsOrders")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('productsOrders berhasil ditampilkan')
      res.json({
        message: "productsOrders berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/order/product/add").post(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myObj = {
    datetime: req.body.datetime,
    products: req.body.products,
    customer: req.body.customer,
    cashier: req.body.cashier,
    price: req.body.price,
    amount: req.body.amount,
    desc: req.body.desc,
    payment: req.body.payment
  };
  db_connect
    .collection("productsOrders")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('productsOrders berhasil ditambahkan')
      res.json({
        message: "productsOrders berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/order/product/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      datetime: req.body.datetime,
      products: req.body.products,
      customer: req.body.customer,
      cashier: req.body.cashier,
      price: req.body.price,
      amount: req.body.amount,
      desc: req.body.desc,
      payment: req.body.payment
    },
  };
  db_connect
    .collection("productsOrders")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update productsOrders");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update productsOrders");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/order/product/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("productsOrders")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("productsOrders berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("productsOrders berhasil dihapus");
      res.json({
        message: "productsOrders berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;