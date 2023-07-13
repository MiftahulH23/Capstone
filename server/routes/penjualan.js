const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/penjualan").get(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  db_connect
    .collection("penjualan")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('penjualan berhasil ditampilkan')
      res.json({
        message: "penjualan berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/penjualan/:id").get(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("penjualan")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('penjualan berhasil ditampilkan')
      res.json({
        message: "penjualan berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/penjualan/add").post(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myObj = {
    namacustomer: req.body.namacustomer,
    menu: req.body.menu,
    jumlah: req.body.jumlah,
    harga: req.body.harga,
    namakasir: req.body.namakasir,
    metodepembayaran: req.body.metodepembayaran,
    jenispesanan: req.body.jenispesanan,
    tanggalwaktu: req.body.tanggalwaktu,
    total: req.body.total,
  };
  db_connect
    .collection("penjualan")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('penjualan berhasil ditambahkan')
      res.json({
        message: "penjualan berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/penjualan/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      namacustomer: req.body.namacustomer,
      menu: req.body.menu,
      jumlah: req.body.jumlah,
      harga: req.body.harga,
      namakasir: req.body.namakasir,
      metodepembayaran: req.body.metodepembayaran,
      jenispesanan: req.body.jenispesanan,
      tanggalwaktu: req.body.tanggalwaktu,
      total: req.body.total,
    },
  };
  db_connect
    .collection("penjualan")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update penjualan");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update penjualan");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/penjualan/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("penjualan")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("penjualan berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("penjualan berhasil dihapus");
      res.json({
        message: "penjualan berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;