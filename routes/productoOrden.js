const express = require('express');
const db = require('../db');
const router = express.Router();

//GET ALL PRODUCTO_ORDER FROM PRODUCTO_ORDEN TABLE

router.get('/', (req, res) => {
  const sqlSelect = 'SELECT * FROM inventario.producto_orden';
  db.query(sqlSelect, (err, result) => {
    err ? res.send('Couldnt get data' + err) : res.send(result);
  });
});

// INSERT PRODUCTO_ORDER

router.post('/insert', (req, res) => {
  const { idOrden, idProductoMedida, cantidad, precioUnitario } = req.body;
  const sqlInsert = `INSERT INTO inventario.producto_orden ( idOrden, idProductoMedida, cantidad, precioUnitario) VALUES (?,?,?,?)`;
  console.log(req.body);

  db.query(
    sqlInsert,
    [idOrden, idProductoMedida, cantidad, precioUnitario],
    (err, result) => {
      err ? res.send('Couldnt insert data' + err) : res.send(result);
    }
  );
});

//delete producto_orden

router.delete('/remove/:id', (req, res) => {
  const { id } = req.params;
  const sqlDelete = `DELETE FROM inventario.producto_orden WHERE idProductoOrden = ?`;
  console.log(req.body);

  db.query(sqlDelete, [id], (err, result) => {
    err ? res.send('Couldnt delete data' + err) : res.send(result);
  });
});

//Get one producto_orden

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const sqlSelect = `select * from inventario.producto_orden where idProductoOrden = ${id}`;
  db.query(sqlSelect, (err, result) => {
    err ? res.send('Couldnt get data' + err) : res.send(result);
  });
});

//Update producto_orden
router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { idOrden, idProductoMedida, cantidad, precioUnitario } = req.body;
  const sqlUpdate = `UPDATE inventario.producto_orden SET idOrden = ?, idProductoMedida = ?, cantidad = ?, precioUnitario = ?  WHERE idProductoOrden = ${id}`;
  db.query(
    sqlUpdate,
    [idOrden, idProductoMedida, cantidad, precioUnitario],
    (err, result) => {
      err ? res.send('Couldnt update data' + err) : res.send(result);
    }
  );
});

module.exports = router;
