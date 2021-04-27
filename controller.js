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

//menambah data produk
exports.tambahproduk = (req, res) => {
    let namaProduk = req.body.namaProduk;
    let harga = req.body.harga;
    let stok = req.body.stok;

    connection.query(`INSERT INTO Produk (namaProduk, harga, stok) VALUES (?,?,?)`, [namaProduk, harga, stok], (error, rows, field) => {
        if (error) {
            console.log(error);
        } else {
            response.ok(`berhasil menambah data!`, res);
        }
    });
};

//update data produk berdasarkan id
exports.updateProduk = (req, res) => {

    let id_produk = req.body.id_produk;
    let namaProduk = req.body.namaProduk;
    let harga = req.body.harga;
    let stok = req.body.stok;

    connection.query(`UPDATE Produk SET namaProduk=?, harga=?, stok=? WHERE id_produk=?`, [namaProduk, harga, stok, id_produk], (error, rows, field) => {
        if (error) {
            console.log(error);
        } else {
            response.ok('berhasil update!', res);
        }
    });
};

//delete data produk berdasarkan id
exports.hapusProduk = (req, res) => {
    let id_produk = req.body.id_produk;

    connection.query(`DELETE FROM Produk WHERE id_produk=?`, [id_produk], (error, rows, field) => {
        if (error) {
            console.log(error);
        } else {
            response.ok(`berhasil menghapus data!`, res);
        }
    });
};