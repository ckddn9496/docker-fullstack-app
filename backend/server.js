// 필요한 모듈들을 가져오기
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

// init Express
const app = express();

// Json 형태로 오는 요청의 본문을 해석해줄수 있게 등록
app.use(bodyParser.json());

// // TABLE 생성
// db.pool.query(`CREATE TABLE lists(
//     id INTEGER AUTO_INCREMENT,
//     value TEXT,
//     PRIMARY KEY (id)
// )`, (err, results, fields) => {
//     console.log('results', results);
// })

app.get('/api/values', (req, res) => {
    db.pool.query('SELECT * FROM lists;',
        (err, results, fields) => {
            if (err) 
                return res.status(500).send(err);
            
            return res.json(results);
        });
})

app.post('/api/value', (req, res, next) => {
    db.pool.query(`INSERT INTO lists (value) VALUES("${req.body.value}")`,
        (err, results, fields) => {
            if (err)
                return res.status(500).send(err);

            return res.json({ success: true, value: req.body.value });
        });
    
})

app.listen(5000, () => {
    console.log('Application with 5000 ports is Running.');
})