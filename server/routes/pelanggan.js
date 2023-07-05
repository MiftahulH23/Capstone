const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/pelanggan").get(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  db_connect
    .collection("pelanggan")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('pelanggan berhasil ditampilkan')
      res.json({
        message: "pelanggan berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/pelanggan/:id").get(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("pelanggan")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('pelanggan berhasil ditampilkan')
      res.json({
        message: "pelanggan berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/pelanggan/add").post(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myObj = {
    nama: req.body.nama,
    alamat: req.body.alamat,
    nohp: req.body.nohp,
  };
  db_connect
    .collection("pelanggan")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('pelanggan berhasil ditambahkan')
      res.json({
        message: "pelanggan berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/pelanggan/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      nama: req.body.nama,
      alamat: req.body.alamat,
      nohp: req.body.nohp,
    },
  };
  db_connect
    .collection("pelanggan")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update pelanggan");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update pelanggan");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/pelanggan/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("pelanggan")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("pelanggan berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("pelanggan berhasil dihapus");
      res.json({
        message: "pelanggan berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;