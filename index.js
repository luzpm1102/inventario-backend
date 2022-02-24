const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const clientRouter = require('./routes/client');
const productRouter = require('./routes/producto');
const medidaRouter = require('./routes/medida');

app.use('/api/clients', clientRouter);
app.use('/api/products', productRouter);
app.use('/api/medida', medidaRouter);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
