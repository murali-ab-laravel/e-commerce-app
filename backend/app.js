const express = require('express');
const app = express();

const path = require('path');
const rootDir = require('./util/path');
const dataBaseConfig = require('./database/db');
const port = process.env.PORT || 3000;

const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

app.use('/', (req, res, next) => {
    res.send("<h1>Hi, This is my first backend APP</h1>");
});

app.listen(port);