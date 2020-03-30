const express = require('express');
const serveStatic = require('serve-static');

const app = express();

app.use(serveStatic(__dirname + "/dist"));

app.get('/api', (req, res) => {
    res.sendStatus(200);
});

app.post('/api/order', (req, res) => {
    res.sendStatus(200);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});