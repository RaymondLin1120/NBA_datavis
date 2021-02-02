const express = require('express');
const playerRoutes = express.Router();

const nba = require('nba');

function getPlayer(name) {
    return new Promise((resolve, reject) => {
        const player = nba.findPlayer(name);
        const teamID = nba.teamIdFromName("HOU")
        //nba.stats.playerInfo({ PlayerID: player.playerId})
        nba.stats.scoreboard({ gameDate: "02/01/2021"})
        .then((data) => {
            resolve(data);
            console.log(data)
        })
        .catch((err) => {
            reject(err);
        })
    })
}
playerRoutes.get('/', (req, res) => {
    getPlayer("James Harden")
    .then((data) => {
        res.json(data);
    });
});

module.exports = playerRoutes;