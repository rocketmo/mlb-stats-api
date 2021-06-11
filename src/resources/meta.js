'use strict';

class Meta {
    getMeta(args = {}) {
        const { params, pathParams: { type = ''}} = args;
        return this.request.get(`${this.apiHost}${type}`, { params: params });
    }
}

module.exports = Meta;
