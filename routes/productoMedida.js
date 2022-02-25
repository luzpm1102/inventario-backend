const express = require('express');
const db = require('../db');
const router = express.Router();

//GET ALL PRODUCT_MEDIDA FROM PRODUCTO_MEDIDA TABLE

router.get('/', (req, res) => {
  const sqlSelect = 'SELECT * FROM inventario.producto_medida';
  db.query(sqlSelect, (err, result) => {
    err ? res.send('Couldnt get data' + err) : res.send(result);
  });
});

// INSERT PRODUCTO_MEDIDA

router.post('/insert', (req, res) => {
  const { idMedida, idProducto, precio, cantidad } = req.body;
  const sqlInsert = `insert into inventario.producto_medida(idMedida, idProducto, precio, cantidad) values (?, ?, ?,?)`;
  console.log(req.body);

  db.query(
    sqlInsert,
    [idMedida, idProducto, precio, cantidad],
    (err, result) => {
      err ? res.send('Couldnt insert data' + err) : res.send(result);
    }
  );
});

//delete product_medida

router.delete('/remove/:id', (req, res) => {
  const { id } = req.params;
  const sqlDelete = `delete from inventario.producto_medida where idProductoMedida= ?`;
  console.log(req.body);

  db.query(sqlDelete, [id], (err, result) => {
    err ? res.send('Couldnt delete data' + err) : res.send(result);
  });
});

//Get one product

router.get('/:idProductoMedida', (req, res) => {
  const { idProductoMedida } = req.params;
  const sqlSelect = `select * from inventario.producto_medida where idProductoMedida = ${idProductoMedida}`;
  db.query(sqlSelect, (err, result) => {
    err ? res.send('Couldnt get data' + err) : res.send(result);
  });
});

//Update producto_medida
router.put('/update/:idProductoMedida', (req, res) => {
  const { idProductoMedida } = req.params;
  const { idMedida, idProducto, precio, cantidad } = req.body;
  const sqlUpdate = `UPDATE inventario.producto_medida SET idMedida = ?, idProducto = ?, precio = ?, cantidad = ? WHERE idProductoMedida = ${idProductoMedida}`;
  db.query(
    sqlUpdate,
    [idMedida, idProducto, precio, cantidad],
    (err, result) => {
      err ? res.send('Couldnt update data' + err) : res.send(result);
    }
  );
});

module.exports = router;
