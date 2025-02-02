'use strict';
const MLBStatsAPI = require('../index');
const should = require('should');

describe('MLBStatsAPI', () => {
    //let mlbStats = new MLBStatsAPI();
    const mlbStats = new MLBStatsAPI();

    it('Should Get Attendance with a 200 Status', async () => {
        const response = await mlbStats.getAttendance({params: {teamId: 111, leagueId: 103, leagueListid: 103}});
        should(response.status).be.exactly(200);
    });

    it('Should Get Awards with a 200 Status', async () => {
        const response = await mlbStats.getAwards();
        should(response.status).be.exactly(200);
    });

    it('Should Get Conferences with a 200 Status', async () => {
        const response = await mlbStats.getConferences();
        should(response.status).be.exactly(200);
    });

    it('Should Get Divisions with a 200 Status', async () => {
        const response = await mlbStats.getDivisions();
        should(response.status).be.exactly(200);
    });

    it('Should Get Divisions with a 200 Status', async () => {
        const response = await mlbStats.getDivisions();
        should(response.status).be.exactly(200);
    });

    it('Should Get Draft with a 200 Status', async () => {
        const response = await mlbStats.getDraft();
        should(response.status).be.exactly(200);
    });

    it('Should Fail to Get Single Game Data with a 405 Status', async () => {
        try {
            const response = await mlbStats.getGame({ pathParams: { gamePk: 12345 }});
        } catch (err) {
            should(err.response.status).be.exactly(405);
        }

    });

    it('Should Get Single Game Diff Patch Data with a 200 Status', async () => {
        const response = await mlbStats.getGameDiffPatch({ pathParams: { gamePk: 606642 }});
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Timestamp with a 200 Status', async () => {
        const response = await mlbStats.getGameTimestamps({ pathParams: { gamePk: 606425 }});
        should(response.status).be.exactly(200);
    });

    it('Should Get Game Changes with a 200 Status', async () => {
        const response = await mlbStats.getGameChanges({params: { updatedSince: 5}});
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Context Metrics with a 200 Status', async () => {
        const response = await mlbStats.getGameContextMetrics({ pathParams: { gamePk: 123456 }});
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Win Probability with a 200 Status', async () => {
        const response = await mlbStats.getGameContextMetrics({ pathParams: { gamePk: 123456 }});
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Boxscore with a 200 Status', async () => {
        const response = await mlbStats.getGameBoxscore({ pathParams: { gamePk: 123456 }});
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Content with a 200 Status', async () => {
        const response = await mlbStats.getGameContent({ pathParams: { gamePk: 123456 }});
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Color with a 200 Status', async () => {
        const response = await mlbStats.getGameColor({ pathParams: { gamePk: 12345 }});
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Color Diff with a 200 Status', async () => {
        const response = await mlbStats.getGameColorDiff({ params: {startTimecode: 123, endTimecode: 12345}, pathParams: { gamePk: 123988123 }});
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Color Timestamps with a 200 Status', async () => {
        const response = await mlbStats.getGameColorTimestamps({ pathParams: { gamePk: 12345 } });
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Linescore with a 200 Status', async () => {
        const response = await mlbStats.getGameLinescore({ pathParams: { gamePk: 123456 } });
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Linescore with a 200 Status', async () => {
        const response = await mlbStats.getGamePlayByPlay({ pathParams: { gamePk: 123456 } });
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Linescore with a 200 Status', async () => {
        const response = await mlbStats.getGamePace({ pathParams: { gamePk: 12} });
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Game Linescore with a 200 Status', async () => {
        const response = await mlbStats.getGamePace();
        should(response.status).be.exactly(200);
    });

    it('Should Get HighLow with a 200 Status', async () => {
        const response = await mlbStats.getHighLow({ params: { sortStat: '', season: 2018 }, pathParams: { orgType: 'division' } });
        should(response.status).be.exactly(200);
    });

    it('Should Fail to Get Home Run Derby with a 404 Status', async () => {
        let response;
        try {
            response = await mlbStats.getHomeRunDerby({ pathParams: { gamePk: 13456} });

        } catch (err) {
            should(err.response.status).be.exactly(404);
        }
    });

    it('Should Get League with a 200 Status', async () => {
        const response = await mlbStats.getLeague({ params: { sportid: 1, leagueIds: 103 } });
        should(response.status).be.exactly(200);
    });

    it('Should Get Venues with a 200 Status', async () => {
        const response = await mlbStats.getVenues();
        should(response.status).be.exactly(200);
    });

    it('Should Get Single Venue with a 200 Status', async () => {
        const response = await mlbStats.getVenue({ pathParams: { venueId: 3313 } });
        should(response.status).be.exactly(200);
    });

    it('Should Get Situation Codes with a 200 Status', async () => {
        const response = await mlbStats.getMeta({ pathParams: { type: 'situationCodes' } });
        should(response.status).be.exactly(200);
    });

    it('Should Get Situation Codes with a 200 Status', async () => {
        const response = await mlbStats.getMeta({ pathParams: { type: 'situationCodes' } });
        should(response.status).be.exactly(200);
    });

    it('Should Get Umpires with a 200 Status', async () => {
        const response = await mlbStats.getJobsUmpires();
        should(response.status).be.exactly(200);
    });

})
