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
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan data produk berdasarkan id
exports.tampilprodukid = (req, res) => {
    let id = req.params.id;
    connection.query(`SELECT * FROM Produk WHERE id_produk = ?`, [id], (error, rows, field) => {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};