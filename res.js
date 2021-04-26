'use strict';

exports.ok = (values, rest) => {
    let data = {
        'status': 200,
        'values': values
    };
    rest.json(data);
    rest.end();
};