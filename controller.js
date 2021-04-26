'use strict';

let response = require('./res');
let connection = require('./koneksi');

exports.index = (req, res) => {
    response.ok(`Aplikasi REST API Berjalan!`, res)
};

//menampilkan data produk
exports.tampilproduk = (req, res) => {
    connection.query(`SELECT * FROM Produk`, (error, rows, field) => {
        if (error) {
            connection.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};