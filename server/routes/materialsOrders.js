const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/order/material").get(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  db_connect
    .collection("materialsOrders")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('materialsOrders berhasil ditampilkan')
      res.json({
        message: "materialsOrders berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/order/material/:id").get(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("materialsOrders")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('materialsOrders berhasil ditampilkan')
      res.json({
        message: "materialsOrders berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/order/material/add").post(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myObj = {
    datetime: req.body.datetime,
    material: req.body.material,
    cashier: req.body.cashier,
    amount: req.body.amount,
    desc: req.body.desc,
  };
  db_connect
    .collection("materialsOrders")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('materialsOrders berhasil ditambahkan')
      res.json({
        message: "materialsOrders berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/order/material/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      datetime: req.body.datetime,
      material: req.body.material,
      cashier: req.body.cashier,
      amount: req.body.amount,
      desc: req.body.desc,
    },
  };
  db_connect
    .collection("materialsOrders")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update materialsOrders");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update materialsOrders");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/order/material/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("materialsOrders")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("materialsOrders berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("materialsOrders berhasil dihapus");
      res.json({
        message: "materialsOrders berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;