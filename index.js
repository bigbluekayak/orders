const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const serveStatic = require('serve-static');

const orders = require('./db/orders');

const app = express();

app.use(serveStatic(__dirname + "/dist"));
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.sendStatus(200);
});

app.post('/api/order', (req, res) => {
    console.log(req.body);
    orders.create(req.body).then((message) => {
        res.json(message);
    }).catch((error) => {
        res.status(500);
        res.json(error);
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});