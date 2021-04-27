'use strict';

module.exports = (app) => {
    let jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilproduk);

    app.route('/tampil/:id')
        .get(jsonku.tampilprodukid);
};