const express = require('express');
const db = require('../db');
const router = express.Router();

//GET ALL MEASURES FROM MEDIDA TABLE

router.get('/', (req, res) => {
  const sqlSelect = 'SELECT * FROM inventario.medida';
  db.query(sqlSelect, (err, result) => {
    err ? res.send('Couldnt get data' + err) : res.send(result);
  });
});

// INSERT MEASURE

router.post('/insert', (req, res) => {
  const { nombre, nombreCorto } = req.body;
  const sqlInsert = `insert into inventario.medida(nombre, nombreCorto) values (?, ?);`;
  console.log(req.body);

  db.query(sqlInsert, [nombre, nombreCorto], (err, result) => {
    err ? res.send('Couldnt insert data' + err) : res.send(result);
  });
});

//delete measure

router.delete('/remove/:id', (req, res) => {
  const { id } = req.params;
  const sqlDelete = `delete from inventario.medida where idMedida= ?`;
  console.log(req.body);

  db.query(sqlDelete, [id], (err, result) => {
    err ? res.send('Couldnt delete data' + err) : res.send(result);
  });
});

//Get one measure

router.get('/:idMedida', (req, res) => {
  const { idMedida } = req.params;
  const sqlSelect = `SELECT * FROM inventario.medida where idMedida=${idMedida}`;
  db.query(sqlSelect, (err, result) => {
    err ? res.send('Couldnt get data' + err) : res.send(result);
  });
});

//Update measure

router.put('/update/:idMedida', (req, res) => {
  const { idMedida } = req.params;
  const { nombre, nombreCorto } = req.body;
  const sqlUpdate = `update inventario.medida set nombre=?, nombreCorto = ? where idMedida= ?`;
  db.query(sqlUpdate, [nombre, nombreCorto, idMedida], (err, result) => {
    err ? res.send('Couldnt update data' + err) : res.send(result);
  });
});

module.exports = router;
