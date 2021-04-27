'use strict';

module.exports = (app) => {
    let jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilproduk);

    app.route('/tampil/:id')
        .get(jsonku.tampilprodukid);

    app.route('/tambah')
        .post(jsonku.tambahproduk);

    app.route('/ubah')
        .put(jsonku.updateProduk);
};