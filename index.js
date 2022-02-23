const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const clientRouter = require('./routes/client');

app.use('/api/clients', clientRouter);

app.get('/', (req, res) => {
  const sqlSelect = 'SELECT * FROM inventario.cliente';
  // const sqlInsert = `INSERT INTO inventario.cliente (nombre, direccion, telefono) VALUES( 'Cliente', 'Atencion', '22334818')`;
  db.query(sqlSelect, (err, result) => {
    err ? console.log(err) : console.log('no error');
    console.log('result', result);
    res.send(result);
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
