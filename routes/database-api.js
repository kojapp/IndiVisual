const express = require('express');
const request = require('request');
const router = express.Router();
const domain = 'localhost';
const targetPORT = 9191;

// these routes send requests to the specified :database
// refer to the DBApi for information on the various routes

router.get('/:database/tables', (req, res) => {
    const database = req.params.database;
    const options = {
        url: `http://${domain}:${targetPORT}/${database}/tables`,
        method: 'GET'
    }
    request(options, (err, response, body) => {
        if (err) throw err;
        else res.send(body);
    });
});

router.get('/:database/:table', (req, res) => {
    const table = req.params.table;
    const database = req.params.database;
    const queryParams = req.query;
    const options = {
        url: `http://${domain}:${targetPORT}/${database}/${table}`,
        method: 'GET',
        qs: queryParams
    }
    request(options, (err, response, body) => {
        if (err) throw err;
        else res.send(body);
    });
});

router.post('/:database/:table', (req, res) => {
    const table = req.params.table;
    const database = req.params.database;
    const requestBody = req.body;
    const options = {
        url: `http://${domain}:${targetPORT}/${database}/${table}`,
        method: 'POST',
        json: requestBody
    }
    request(options, (err, response, body) => {
        if (err) throw err;
        else res.send(body);
    });
});

router.put('/:database/:table', (req, res) => {
    const table = req.params.table;
    const database = req.params.database;
    const requestBody = req.body;
    const options = {
        url: `http://${domain}:${targetPORT}/${database}/${table}`,
        method: 'PUT',
        json: requestBody
    }
    request(options, (err, response, body) => {
        if (err) throw err;
        else res.send(body);
    });
});

router.delete('/:database/:table', (req, res) => {
    const table = req.params.table;
    const database = req.params.database;
    const requestBody = req.body;
    let options = {
        url: `http://${domain}:${targetPORT}/${database}/${table}`,
        method: 'DELETE',
        json: requestBody
    }
    request(options, (err, response, body) => {
        if (err) throw err;
        else res.send(body);
    });
});

module.exports = router;