'use strict';

class Venue {
    getVenue(args = {}) {
        const { params, pathParams: { venueId = ''}} = args;
        return this.request.get(`${this.apiHost}venues/${venueId}`, { params: params });
    }

    getVenues(args = {}) {
        const { params } = args;
        return this.request.get(`${this.apiHost}venues`, { params: params });
    }
}

module.exports = Venue;
