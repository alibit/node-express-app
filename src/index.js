const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

const REDIS_HOST = 'redis';
const REDIS_PORT = '6379';
const redisClient = redis.createClient({url: `redis://${REDIS_HOST}:${REDIS_PORT}`,});

redisClient.on('error', err => console.log('Redis Client Error', err));
redisClient.on('connect', () => console.log('connected to redis...'));
redisClient.connect();


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

app.get('/', (req, res) => { 
    redisClient.set('products',"Laptops,Desktops");
    console.log(`respond from ${os.hostname}`);
    res.send('<h1> TresMerge</h1>');
});
app.get('/data', async (req, res) => { 
    const products = await redisClient.get('products');
    res.send(`<h1> TresMerge from AWS , using docker hub ali nabil</h1><h2>${products}</h2>`);
});
app.listen(PORT, () => console.log(`app is up and running on port: ${PORT}`));
