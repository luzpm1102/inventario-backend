const express = require('express');
const db = require('../db');
const router = express.Router();

//GET ALL CLIENTS FROM CLIENT TABLE

router.get('/', (req, res) => {
  const sqlSelect = 'SELECT * FROM inventario.cliente';
  db.query(sqlSelect, (err, result) => {
    err ? res.send('Couldnt get data') : res.send(result);
  });
});

// INSERT CLIENT

router.post('/insert', (req, res) => {
  const { nombre, direccion, telefono } = req.body;
  const sqlInsert = `INSERT INTO inventario.cliente (nombre, direccion, telefono) VALUES(?,?,?)`;
  console.log(req.body);

  db.query(sqlInsert, [nombre, direccion, telefono], (err, result) => {
    err ? res.send('Couldnt insert data' + err) : res.send(result);
  });
});

//delete client

router.delete('/remove/:id', (req, res) => {
  const { id } = req.params;
  const sqlDelete = `delete from inventario.cliente where idCliente= ?`;
  console.log(req.body);

  db.query(sqlDelete, [id], (err, result) => {
    err ? res.send('Couldnt delete data' + err) : res.send(result);
  });
});

//Get one client

router.get('/:idClient', (req, res) => {
  const { idClient } = req.params;
  const sqlSelect = `SELECT * FROM inventario.cliente where idCliente=${idClient}`;
  db.query(sqlSelect, (err, result) => {
    err ? res.send('Couldnt get data' + err) : res.send(result);
  });
});

//Update client
router.put('/update/:idClient', (req, res) => {
  const { idClient } = req.params;
  const { nombre, direccion, telefono } = req.body;
  const sqlUpdate = `update inventario.cliente set nombre=?, direccion = ?, telefono=? where idCliente= ?`;
  db.query(
    sqlUpdate,
    [nombre, direccion, telefono, idClient],
    (err, result) => {
      err ? res.send('Couldnt update data' + err) : res.send(result);
    }
  );
});

module.exports = router;
