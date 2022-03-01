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
router.post('/insertMultiples', (req, res) => {
  const sqlInsert = `INSERT INTO inventario.producto_orden ( idOrden, idProductoMedida, cantidad, precioUnitario) VALUES ?`;
  const { products } = req.body;
  console.log(products);

  db.query(
    sqlInsert,
    [
      products.map((item) => {
        return [
          item.idOrden,
          item.idProductoMedida,
          item.cantidad,
          item.precioUnitario,
        ];
      }),
    ],
    (error, results) => {
      error ? res.send('Couldnt insert data' + error) : res.send(results);
    }
  );

  //   db.query(sqlInsert, [finalResult], (err, result) => {
  //     err ? res.send('Couldnt insert data' + err) : res.send(result);
  //   });
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

// Todos los producto orden de una orden segun ID

router.get('/orderDetails/:id', (req, res) => {
  const { id } = req.params;
  const select = `select o.idOrden, p.idProductoOrden, ip.nombre as Producto , ip.descripcion, p.cantidad, p.precioUnitario , p.precioTotal
    from inventario.producto_orden as p
    inner join inventario.orden as o on p.idOrden = o.idOrden 
    inner join inventario.producto_medida as pm  on pm.idProductoMedida = p.idProductoMedida
    inner join inventario.producto as ip on ip.idProducto = pm.idProducto where o.idOrden= ${id}`;
  db.query(select, (err, result) => {
    err ? res.send('Couldnt get data' + err) : res.send(result);
  });
});

module.exports = router;
