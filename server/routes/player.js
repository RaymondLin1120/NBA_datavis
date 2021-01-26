const express = require('express');
const playerRoutes = express.Router();

const nba = require('nba');

function getPlayer(name) {
    return new Promise((resolve, reject) => {
        const player = nba.findPlayer(name);

        nba.stats.playerProfile({ PlayerID: player.playerId})
        .then((data) => {
            resolve(data);
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