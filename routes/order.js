const express = require('express');
const db = require('../db');
const router = express.Router();

//GET ALL ORDERS FROM ORDER TABLE

router.get('/', (req, res) => {
  const sqlSelect = 'SELECT * FROM inventario.orden';
  db.query(sqlSelect, (err, result) => {
    err ? res.send('Couldnt get data' + err) : res.send(result);
  });
});

// INSERT PRODUCTO_MEDIDA

router.post('/insert', (req, res) => {
  const { idCliente, total, fecha, fechaEntrega } = req.body;
  const sqlInsert = `INSERT INTO inventario.orden(idCliente, total, fecha, fechaEntrega) VALUES (?,?,?,?);`;
  console.log(req.body);

  db.query(
    sqlInsert,
    [idCliente, total, fecha, fechaEntrega],
    (err, result) => {
      err
        ? res.send('Couldnt insert data' + err)
        : res.send('inserted data: ' + result.affectedRows);
    }
  );
});

//DELETE ORDER

router.delete('/remove/:id', (req, res) => {
  const { id } = req.params;
  const sqlDelete = `DELETE FROM inventario.orden WHERE idOrden = ?`;
  console.log(req.body);

  db.query(sqlDelete, [id], (err, result) => {
    err ? res.send('Couldnt delete data' + err) : res.send(result);
  });
});

//Get one order

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const sqlSelect = `SELECT * FROM inventario.orden WHERE idOrden = ${id}`;
  db.query(sqlSelect, (err, result) => {
    err ? res.send('Couldnt get data' + err) : res.send(result);
  });
});

//Update order
router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { idCliente, total, fechaEntrega } = req.body;
  const sqlUpdate = `UPDATE inventario.orden SET  idCliente = ? , total = ?, fechaEntrega = ? WHERE idOrden = ? ${id}`;
  db.query(sqlUpdate, [idCliente, total, fechaEntrega], (err, result) => {
    err ? res.send('Couldnt update data' + err) : res.send('ok' + result);
  });
});

//Informacion del cliente de la orden
router.get('/orderClientInfo/:id', (req, res) => {
  const { id } = req.params;
  const select = `select nombre, direccion, telefono, fecha, fechaEntrega, total from inventario.cliente as c inner join inventario.orden as o on o.idCliente= c.idCliente where idOrden =${id}`;
  db.query(select, (err, result) => {
    err ? res.send('Couldnt read data' + err) : res.send(result);
  });
});

module.exports = router;
