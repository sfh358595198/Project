const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "X-Requested-With");
    res.header('Access-Control-Allow-Methods', "PUT,POST,GET,DELETE,OPTIONS");
    res.header('Content-Type', "application/json;charset=utf-8");
    next();
})
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'shuqi'
});
connection.connect();
app.get('/mall', (req, res) => {
    connection.query('SELECT * FROM mall', (err, result) => {
        const obj = {
            data: result
        }
        res.json(obj)
    })
})
app.get('/sort', (req, res) => {
    connection.query('SELECT * FROM sort', (err, result) => {
        const obj = {
            data: result
        }
        res.json(obj)
    })
})
app.get('/list', (req, res) => {
    connection.query('SELECT * FROM list WHERE term1=' + req.query.term1, (err, result) => {
        const obj = {
            data: result
        }
        res.json(obj)
    })
})
app.get('/search', (req, res) => {
    connection.query('SELECT * FROM list WHERE author like "%' + req.query.key + '%" or bookname like "%' + req.query.key + '%"', (err, result) => {
        const obj = {
            data: result
        }
        res.json(obj)
    })
})
app.get('/search1', (req, res) => {
    connection.query('SELECT * FROM list', (err, result) => {
        const obj = {
            data: result
        }
        res.json(obj)
    })
})
app.get('/count', (req, res) => {
    connection.query('SELECT count(*) FROM list', (err, result) => {
        const obj = {
            data: result
        }
        res.json(obj)
    })
})
app.get('/detail/:id', (req, res) => {
    connection.query('SELECT * FROM list WHERE id ='+req.params.id, (err, result) => {
        const obj = {
            data: result
        }
        res.json(obj)
    })
})
app.get('/list1', (req, res) => {
    connection.query('SELECT * FROM list LIMIT ' + req.query.index + ',9', (err, result) => {
        const obj = {
            data: result
        }
        res.json(obj)
    })
})
app.get('/add', (req, res) => {
    connection.query('SELECT * FROM list WHERE id ='+req.query.id, (err, result) => {
        const obj = {
            data: result
        }
        res.json(obj)
    })
})
app.listen(port, () => console.log('server has start'));