const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/product").get(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  db_connect
    .collection("product")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('product berhasil ditampilkan')
      res.json({
        message: "product berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/product/:id").get(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("product")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('product berhasil ditampilkan')
      res.json({
        message: "product berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/product/add").post(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myObj = {
    nama: req.body.nama,
    jumlah: req.body.jumlah,
    noPesanan: req.body.noPesanan,
  };
  db_connect
    .collection("product")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('product berhasil ditambahkan')
      res.json({
        message: "product berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/product/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
        nama: req.body.nama,
        jumlah: req.body.jumlah,
        noPesanan: req.body.noPesanan,
    },
  };
  db_connect
    .collection("product")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update product");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update product");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/product/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("product")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("product berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("product berhasil dihapus");
      res.json({
        message: "product berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;