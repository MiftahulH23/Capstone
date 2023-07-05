const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/kasir").get(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  db_connect
    .collection("kasir")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('kasir berhasil ditampilkan')
      res.json({
        message: "kasir berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/kasir/:id").get(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("kasir")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('kasir berhasil ditampilkan')
      res.json({
        message: "kasir berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/kasir/add").post(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myObj = {
    nama: req.body.nama,
    nohp: req.body.nohp,
  };
  db_connect
    .collection("kasir")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('kasir berhasil ditambahkan')
      res.json({
        message: "kasir berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/kasir/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      nama: req.body.nama,
      nohp: req.body.nohp,
    },
  };
  db_connect
    .collection("kasir")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update kasir");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update kasir");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/kasir/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("kasir")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("kasir berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("kasir berhasil dihapus");
      res.json({
        message: "kasir berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;