const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/pesanbahanbaku").get(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  db_connect
    .collection("pesanbahanbaku")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('bahan baku berhasil ditampilkan')
      res.json({
        message: "bahan baku berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/pesanbahanbaku/:id").get(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("pesanbahanbaku")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('bahan baku berhasil ditampilkan')
      res.json({
        message: "bahan baku berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/pesanbahanbaku/add").post(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myObj = {
    nama: req.body.nama,
    stok: req.body.stok,
    status: req.body.status
  };
  db_connect
    .collection("pesanbahanbaku")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('bahan baku berhasil ditambahkan')
      res.json({
        message: "bahan baku berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/pesanbahanbaku/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      nama: req.body.nama,
      stok: req.body.stok,
      status: req.body.status,
    },
  };
  db_connect
    .collection("pesanbahanbaku")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update bahan baku");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update bahan baku");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/pesanbahanbaku/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("estehindonesia");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("pesanbahanbaku")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("bahan baku berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("bahan baku berhasil dihapus");
      res.json({
        message: "bahan baku berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;