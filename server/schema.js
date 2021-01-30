const {
    GraphQLObjectType, 
    GraphQLFloat,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull
} = require('graphql');

const nba = require('nba');

const curry = nba.findPlayer('Stephen Curry');
const TeamID = nba.teamIdFromName("HOU");

nba.stats.playerInfo({ PlayerID: curry.playerId }).then((data) => console.log(data));

const HistoricStats= new GraphQLObjectType({
    name:'historicStats',
    fields: () => ({
        playerId: { type: GraphQLNonNull(GraphQLInt) },
        teamId: { type: GraphQLNonNull(GraphQLInt) },
        teamAbbreviation: { type: GraphQLNonNull(GraphQLString) },
        seasonId: { type: GraphQLNonNull(GraphQLString)},
        teamAbbreviation: { type: GraphQLNonNull(GraphQLString)},
        playerAge: { type: GraphQLNonNull(GraphQLInt)},
        gp: { type: GraphQLNonNull(GraphQLInt)},
        fgm: { type: GraphQLNonNull(GraphQLFloat)},
        fga: { type: GraphQLNonNull(GraphQLInt)},
        fGPct: { type: GraphQLNonNull(GraphQLFloat) },
        fG3A: { type: GraphQLNonNull(GraphQLFloat) },
        pg3Pct: { type: GraphQLNonNull(GraphQLFloat) } ,
        fG3M: { type: GraphQLNonNull(GraphQLFloat) },
        ftPct3M: { type: GraphQLNonNull(GraphQLFloat) },
        fta: { type: GraphQLNonNull(GraphQLFloat) },
        ftm: { type: GraphQLNonNull(GraphQLFloat) },
        pts: { type: GraphQLNonNull(GraphQLFloat) },
        reb: { type: GraphQLNonNull(GraphQLFloat) },
        oreb: { type: GraphQLNonNull(GraphQLFloat) },
        dreb: { type: GraphQLNonNull(GraphQLFloat) },
        ast: { type: GraphQLNonNull(GraphQLFloat) },
        blks: { type: GraphQLNonNull(GraphQLFloat) },
        tov: { type: GraphQLNonNull(GraphQLFloat) },
        min: { type: GraphQLNonNull(GraphQLFloat) }
    })
});

const CurrentStats = new GraphQLObjectType({
    name:'currentStats',
    fields: () => ({
        playerId:{ type: GraphQLInt },
        playerName:{ type: GraphQLString },
        teamId:{ type: GraphQLInt },
        teamAbbreviation:{ type: GraphQLString },
        age:{ type: GraphQLInt },
        gp:{ type: GraphQLInt },
        w:{ type: GraphQLInt },
        l:{ type: GraphQLInt },
        wPct:{ type: GraphQLFloat },
        min:{ type: GraphQLFloat },
        fgm:{ type: GraphQLFloat },
        fga:{ type: GraphQLFloat },
        fgPct:{ type: GraphQLFloat },
        fG3M:{ type: GraphQLFloat },
        fG3A:{ type: GraphQLFloat },
        fg3Pct:{ type: GraphQLFloat },
        ftm:{ type: GraphQLFloat },
        fta:{ type: GraphQLFloat },
        ftPct:{ type: GraphQLFloat },
        oreb:{ type: GraphQLFloat },
        dreb:{ type: GraphQLFloat },
        reb:{ type: GraphQLFloat },
        ast:{ type: GraphQLFloat },
        tov:{ type: GraphQLFloat },
        stl:{ type: GraphQLFloat },
        blk:{ type: GraphQLFloat },
        blka:{ type: GraphQLFloat },
        pf:{ type: GraphQLFloat },
        pfd:{ type: GraphQLFloat },
        pts:{ type: GraphQLFloat },
        plusMinus:{ type: GraphQLFloat },
        nbaFantasyPts:{ type: GraphQLFloat },
        dD2:{ type: GraphQLInt },
        tD3:{ type: GraphQLInt },
        gpRank:{ type: GraphQLInt },
        wRank:{ type: GraphQLInt },
        lRank:{ type: GraphQLInt },
        wPctRank:{ type: GraphQLInt },
        minRank:{ type: GraphQLInt },
        fgmRank:{ type: GraphQLInt },
        fgaRank:{ type: GraphQLInt },
        fgPctRank:{ type: GraphQLInt },
        fg3mRank:{ type: GraphQLInt },
        fg3aRank:{ type: GraphQLInt },
        fg3PctRank:{ type: GraphQLInt },
        ftmRank:{ type: GraphQLInt },
        ftaRank:{ type: GraphQLInt },
        ftPctRank:{ type: GraphQLInt },
        orebRank:{ type: GraphQLInt },
        drebRank:{ type: GraphQLInt },
        rebRank:{ type: GraphQLInt },
        astRank:{ type: GraphQLInt },
        tovRank:{ type: GraphQLInt },
        stlRank:{ type: GraphQLInt },
        blkRank:{ type: GraphQLInt },
        blkaRank:{ type: GraphQLInt },
        pfRank:{ type: GraphQLInt },
        pfdRank:{ type: GraphQLInt },
        ptsRank:{ type: GraphQLInt },
        plusMinusRank:{ type: GraphQLInt },
        nbaFantasyPtsRank:{ type: GraphQLInt },
        dd2Rank:{ type: GraphQLInt },
        td3Rank:{ type: GraphQLInt }
    })
});

const Shots = new GraphQLObjectType({
    name:'shotCharting',
    fields: () => ({
        gridType:{ type: GraphQLString },
        gameId:{ type: GraphQLString },
        gameEventId:{ type: GraphQLInt },
        playerId:{ type: GraphQLInt },
        playerName:{ type: GraphQLString },
        teamId:{ type: GraphQLInt },
        teamName:{ type: GraphQLString },
        period:{ type: GraphQLInt },
        minutesRemaining:{ type: GraphQLInt },
        secondsRemaining:{ type: GraphQLInt },
        eventType:{ type: GraphQLString },
        actionType:{ type: GraphQLString },
        shotType:{ type: GraphQLString },
        shotZoneBasic:{ type: GraphQLString },
        shotZoneArea:{ type: GraphQLString },
        shotZoneRange:{ type: GraphQLString },
        shotDistance:{ type: GraphQLInt },
        locX:{ type: GraphQLInt },
        locY:{ type: GraphQLInt },
        shotAttemptedFlag:{ type: GraphQLInt },
        shotMadeFlag:{ type: GraphQLInt },
        gameDate:{ type: GraphQLInt },
        htm:{ type: GraphQLString },
        vtm:{ type: GraphQLString }
    })
})

const ShotFreq = new GraphQLObjectType({
    name: 'shotFreq',
    fields: () => ({
        playerId:{ type: GraphQLInt },
        playerName:{ type: GraphQLString },
        playerLastTeamId:{ type: GraphQLInt },
        playerLastTeamAbbreviation:{ type: GraphQLString },
        age:{ type: GraphQLInt },
        gp:{ type: GraphQLInt },
        g:{ type: GraphQLInt },
        fgaFrequency:{ type: GraphQLInt },
        fgm:{ type: GraphQLFloat },
        fga:{ type: GraphQLFloat },
        fgPct:{ type: GraphQLFloat },
        efgPct:{ type: GraphQLFloat },
        fg2aFrequency:{ type: GraphQLFloat },
        fG2M:{ type: GraphQLFloat },
        fG2A:{ type: GraphQLFloat },
        fg2Pct:{ type: GraphQLFloat },
        fg3aFrequency:{ type: GraphQLFloat },
        fG3M:{ type: GraphQLFloat },
        fG3A:{ type: GraphQLFloat },
        fg3Pct:{ type: GraphQLFloat }
    })
})

const TeamRoster = new GraphQLObjectType({
    name: 'teamRoster',
    fields: () => ({
        teamID:{ type: GraphQLInt },
        season:{ type: GraphQLString },
        leagueID:{ type: GraphQLString },
        player:{ type: GraphQLString },
        playerSlug:{ type: GraphQLString },
        num:{ type: GraphQLString },
        position:{ type: GraphQLString },
        height:{ type: GraphQLString },
        weight:{ type: GraphQLString },
        birthDate:{ type: GraphQLString },
        age:{ type: GraphQLInt },
        exp:{ type: GraphQLString },
        school:{ type: GraphQLString },
        playerId:{ type: GraphQLInt }
    })
})

const TeamShooting = new GraphQLObjectType({
    name: 'teamShooting',
    fields: () => ({
        teamId:{ type: GraphQLInt },
        teamName:{ type: GraphQLString },
        teamAbbreviation:{ type: GraphQLString },
        gp:{ type: GraphQLInt },
        g:{ type: GraphQLInt },
        fgaFrequency:{ type: GraphQLInt },
        fgm:{ type: GraphQLFloat },
        fga:{ type: GraphQLFloat },
        fgPct:{ type: GraphQLFloat },
        efgPct:{ type: GraphQLFloat },
        fg2aFrequency:{ type: GraphQLFloat },
        fG2M:{ type: GraphQLFloat },
        fG2A:{ type: GraphQLFloat },
        fg2Pct:{ type: GraphQLFloat },
        fg3aFrequency:{ type: GraphQLFloat },
        fG3M:{ type: GraphQLFloat },
        fG3A:{ type: GraphQLFloat },
        fg3Pct:{ type: GraphQLFloat }
    })
})
// const Rankings = new GraphQLObjectType({
//     name: 'Rankings',
//     fields: () => ({
//         playerId: { type: GraphQLInt },
//         rankFg3Pct: { type: GraphQLInt },
//         rankFgPct: { type: GraphQLInt },
//         rankFtPct: { type: GraphQLInt },
//         rankPgAst: { type: GraphQLInt },
//         rankPgBlk: { type: GraphQLInt },
//         rankPgDreb: { type: GraphQLInt },
//         rankPgEff: { type: GraphQLInt },
//         rankPgFg3a: { type: GraphQLInt },
//         rankPgFg3m: { type: GraphQLInt },
//         rankPgFga: { type: GraphQLInt },
//         rankPgFgm: { type: GraphQLInt },
//         rankPgFta: { type: GraphQLInt },
//         rankPgFtm: { type: GraphQLInt },
//         rankPgMin: { type: GraphQLInt },
//         rankPgOreb: { type: GraphQLInt },
//         rankPgPts: { type: GraphQLInt },
//         rankPgReb: { type: GraphQLInt },
//         rankPgStl: { type: GraphQLInt },
//         rankPgTov: { type: GraphQLInt },
//         seasonId: { type: GraphQLString },
//         teamAbbreviation: { type: GraphQLString },
//         teamId: { type: GraphQLInt }
//     })
// })


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        historicStats: {
            type: new GraphQLList(HistoricStats),
            resolve: () => nba.stats.playerProfile({ PlayerID: curry.playerId }).then((data) => data['seasonTotalsRegularSeason'])
        },
        currentStats: {
            type: new GraphQLList(CurrentStats),
            resolve: () => nba.stats.playerStats({}).then((data) => data['leagueDashPlayerStats'])
        },
        shots: {
            type: new GraphQLList(Shots),
            resolve: () => nba.stats.shots({ PlayerID: curry.playerId }).then((data) => data['shot_Chart_Detail'])
        },
        shotFreq: {
            type: new GraphQLList(ShotFreq),
            resolve: () => nba.stats.playerShooting({}).then((data) => data['leagueDashPTShots'])
        },
        teamRoster: {
            type: new GraphQLList(TeamRoster),
            resolve: () => nba.stats.commonTeamRoster({TeamID: TeamID}).then((data) => data['commonTeamRoster'])
        },
        teamShooting: {
            type: new GraphQLList(TeamShooting),
            resolve: () => nba.stats.teamShooting({TeamID: TeamID}).then((data) => data['leagueDashPTShots'])
        }

        // rankings: {
        //     type: new GraphQLList(Rankings),
        //     resolve: () => nba.stats.playerProfile({ PlayerID: curry.playerId }).then((data) => data["seasonRankingsRegulatSeason"])
        // }
    })
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
