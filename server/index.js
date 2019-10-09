  
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();
const massive = require

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))