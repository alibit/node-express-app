const express = require('express');
const mongoose = require('mongoose');

const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017;
const DB_HOST = 'mongo';

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose
    .connect(URI)
    .then(() => console.log('connect to db...'))
    .catch((err) => console.log('failed to connect to db: ', err));

const PORT = 4000;
const app = express();

app.get('/', (req, res) => res.send('<h1> sss The Logo is grand you are Welcome to Tresmerge! Hello!from ali nabil Barour from UAE 2023</h1> <p>This is adports IT team </p>'));
app.listen(PORT, () => console.log(`app is up and running on port: ${PORT}`));
