'use strict';

const Attendance = require('./attendance');
const Awards = require('./awards');
const Conferences = require('./conferences');
const Divisions = require('./divisions');
const Draft = require('./draft');
const Game = require('./game');
const HighLow = require('./highLow');
const HomeRunDerby = require('./homeRunDerby');
const Jobs = require('./jobs');
const League = require('./league');
const Meta = require('./meta');
const People = require('./people');
const Schedule = require('./schedule');
const Seasons = require('./seasons');
const Sports = require('./sports');
const Standings = require('./standings');
const Stats = require('./stats');
const Teams = require('./teams');
const Venue = require('./venue');

const resources = { Attendance, Awards, Conferences, Divisions, Draft, Game, HighLow, HomeRunDerby,
    Jobs, League, Meta, People, Schedule, Seasons, Sports, Standings, Stats, Teams, Venue };

module.exports = resources;
