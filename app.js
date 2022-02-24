require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const route = require('./routes');
const path = require('path');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join('./uploads')))

app.use(route);

module.exports = app;
