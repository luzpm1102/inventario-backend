const express = require('express');
const db = require('../db');
const router = express.Router();

//GET ALL PRODUCTS FROM PRODUCT TABLE

router.get('/', (req, res) => {
  const sqlSelect = 'SELECT * FROM inventario.producto';
  db.query(sqlSelect, (err, result) => {
    err ? res.send('Couldnt get data' + err) : res.send(result);
  });
});

// INSERT PRODUCT

router.post('/insert', (req, res) => {
  const { nombre, descripcion, SKU } = req.body;
  const sqlInsert = `insert into inventario.producto(nombre, descripcion, SKU) values (?, ?, ?)`;
  console.log(req.body);

  db.query(sqlInsert, [nombre, descripcion, SKU], (err, result) => {
    err ? res.send('Couldnt insert data' + err) : res.send(result);
  });
});

//delete product

router.delete('/remove/:id', (req, res) => {
  const { id } = req.params;
  const sqlDelete = `delete from inventario.producto where idProducto= ?`;
  console.log(req.body);

  db.query(sqlDelete, [id], (err, result) => {
    err ? res.send(err) : res.send(result);
  });
});

//Get one product

router.get('/:idProducto', (req, res) => {
  const { idProducto } = req.params;
  const sqlSelect = `SELECT * FROM inventario.producto where idProducto=${idProducto}`;
  db.query(sqlSelect, (err, result) => {
    err ? res.send('Couldnt get data' + err) : res.send(result);
  });
});

//Update product
router.put('/update/:idProducto', (req, res) => {
  const { idProducto } = req.params;
  const { nombre, descripcion, SKU } = req.body;
  const sqlUpdate = `update inventario.producto set nombre=?, descripcion = ?, SKU=? where idProducto= ?`;
  db.query(sqlUpdate, [nombre, descripcion, SKU, idProducto], (err, result) => {
    err ? res.send('Couldnt update data' + err) : res.send(result);
  });
});

module.exports = router;
