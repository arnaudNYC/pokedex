const express = require('express');
const compression = require('compression');

const app = express();
app.use(compression());

const port = 5000;

app.use(express.static('assets'));

/* eslint-disable-next-line no-console */
app.listen(port, () => console.log(`App listening on port ${port}!`));
