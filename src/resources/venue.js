'use strict';

class Venue {
    getVenue(args = {}) {
        const { params } = args;
        return this.request.get(`${this.apiHost}venues`, { params: params });
    }
}

module.exports = Venue;
