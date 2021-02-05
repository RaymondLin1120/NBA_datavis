const { query } = require('express');
const {
    GraphQLObjectType, 
    GraphQLFloat,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema, 
    GraphQLScalarType,
    GraphQLJSON
    } = require('graphql');

const nba = require('nba');

const playerName = "";
const curry = nba.findPlayer('James Harden');
const TeamID = nba.teamIdFromName("Hou");
const GameID = "0021401082";

var d = new Date();
var currentDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear()

const PlayerInfo =  new GraphQLObjectType({
    name: 'playerInfo',
    fields: () => ({
        personId: { type: GraphQLInt },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        displayFirstLast: { type: GraphQLString },
        displayLastCommaFirst: { type: GraphQLString },
        height: { type: GraphQLString },
        weight: { type: GraphQLString },
        seasonExp: { type: GraphQLInt },
        jersey: { type: GraphQLString },
        position: { type: GraphQLString },
        rosterstatus: { type: GraphQLString },
        teamId: { type: GraphQLInt },
        teamName: { type: GraphQLString },
        teamAbbreviation: { type: GraphQLString },
        teamCode: { type: GraphQLString },
        teamCity: { type: GraphQLString },
    })
})
const HistoricStats= new GraphQLObjectType({
    name:'historicStats',
    fields: () => ({
        playerId: { type: GraphQLInt },
        teamId: { type: GraphQLInt },
        teamAbbreviation: { type: GraphQLString },
        seasonId: { type: GraphQLString },
        teamAbbreviation: { type: GraphQLString },
        playerAge: { type: GraphQLInt },
        gp: { type: GraphQLInt },
        fgm: { type: GraphQLFloat },
        fga: { type: GraphQLFloat },
        fgPct: { type: GraphQLFloat },
        fG3A: { type: GraphQLFloat },
        fg3Pct: { type: GraphQLFloat },
        fG3M: { type: GraphQLFloat },
        ftPct: { type: GraphQLFloat },
        fta: { type: GraphQLFloat },
        ftm: { type: GraphQLFloat },
        pts: { type: GraphQLFloat },
        reb: { type: GraphQLFloat },
        oreb: { type: GraphQLFloat },
        dreb: { type: GraphQLFloat },
        ast: { type: GraphQLFloat },
        stl: { type: GraphQLFloat },
        blk: { type: GraphQLFloat },
        tov: { type: GraphQLFloat },
        min: { type: GraphQLFloat }
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

const TeamStats = new GraphQLObjectType({
    name: 'teamStats',
    fields: () => ({
        teamId:{ type: GraphQLInt },
        teamName:{ type: GraphQLString },
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
        cfid:{ type: GraphQLInt },
        cfparams:{ type: GraphQLString }
    })
})

const rowSetSchema = new GraphQLList(GraphQLString);
const nbaResultSetSchema = {
    name: { type: GraphQLString },
    headers: { type: new GraphQLList(GraphQLString) },
    rowSet: { type: new GraphQLList(rowSetSchema) }
}

const BoxScores = new GraphQLObjectType({
    name: "boxScores",
    fields: () => (nbaResultSetSchema)
})

const gameHeader = new GraphQLObjectType({
    name:"gameHeader",
    fields: () => ({
        gameDateEst: { type: GraphQLString },
        gameSequence: { type: GraphQLInt },
        gameId:{ type: GraphQLString },
        gameStatusId:{ type: GraphQLInt },
        gameStatusText:{ type: GraphQLString },
        gamecode:{ type: GraphQLString },
        homeTeamId:{ type: GraphQLInt },
        visitorTeamId:{ type: GraphQLInt },
        season:{ type: GraphQLString },
        livePeriod:{ type: GraphQLInt },
        livePcTime:{ type: GraphQLString },
        livePeriodTimeBcast:{ type: GraphQLString }
    })
})

const lineScore = new GraphQLObjectType({
    name:"LineScore",
    fields: () => ({
        gameDateEst:{ type: GraphQLString },
        gameSequence:{ type: GraphQLInt },
        gameId:{ type: GraphQLString },
        teamId:{ type: GraphQLInt },
        teamAbbreviation:{ type: GraphQLString },
        teamCityName:{ type: GraphQLString },
        teamWinsLosses:{ type: GraphQLString },
        ptsQtr1:{ type: GraphQLInt },
        ptsQtr2:{ type: GraphQLInt },
        ptsQtr3:{ type: GraphQLInt },
        ptsQtr4:{ type: GraphQLInt },
        ptsOt1:{ type: GraphQLInt },
        ptsOt2:{ type: GraphQLInt },
        ptsOt3:{ type: GraphQLInt },
        ptsOt4:{ type: GraphQLInt },
        ptsOt5:{ type: GraphQLInt },
        ptsOt6:{ type: GraphQLInt },
        ptsOt7:{ type: GraphQLInt },
        ptsOt8:{ type: GraphQLInt },
        ptsOt9:{ type: GraphQLInt },
        ptsOt10:{ type: GraphQLInt },
        pts:{ type: GraphQLInt },
        fgPct:{ type: GraphQLFloat },
        ftPct:{ type: GraphQLFloat },
        fg3Pct:{ type: GraphQLFloat },
        ast:{ type: GraphQLFloat },
        reb:{ type: GraphQLFloat },
        tov:{ type: GraphQLFloat }
    })
})

const confStandingsByDay = new GraphQLObjectType({
    name:"confStandings",
    fields: () => ({
        teamId:{ type: GraphQLInt },
        leagueId:{ type: GraphQLString },
        seasonId:{ type: GraphQLString },
        standingsdate:{ type: GraphQLString },
        conference:{ type: GraphQLString },
        team:{ type: GraphQLString },
        g:{ type: GraphQLInt },
        w:{ type: GraphQLInt },
        l:{ type: GraphQLInt },
        wPct:{ type: GraphQLFloat },
        homeRecord:{ type: GraphQLString },
        roadRecord:{ type: GraphQLString }
    })
})

const Scoreboard = new GraphQLObjectType({
    name:"scoreboard",
    fields: () => ({
        gameHeader: { type: new GraphQLList(gameHeader)},
        lineScore: { type: new GraphQLList(lineScore)},
        eastConfStandingsByDay: { type: new GraphQLList(confStandingsByDay)},
        westConfStandingsByDay: { type: new GraphQLList(confStandingsByDay)}
    })
})

/* const leagueLeadersHeader = new GraphQLObjectType({
    name: "LeagueLeadersHeader",
    fields: () => ({
        name: { type: GraphQLString },
        headers: { type: GraphQLList }
    })
}) */

const leagueLeadersParameters = {
    name: "leagueLeadersParameters",
    fields: () => ({
        LeagueID: { type: GraphQLString },
        PerMode: { type: GraphQLString },
        StatCategory: { type: GraphQLString },
        Season: { type: GraphQLString },
        SeasonType: { type: GraphQLString },
        Scope: { type: GraphQLString },
        ActiveFlag: { type: GraphQLString }
    })
}

const leagueLeadersResultSet = {
    name: "leagueLeadersResultSet",
    fields: () => (nbaResultSetSchema)
}

const leagueLeaders = new GraphQLObjectType({
    name: "LeagueLeaders",
    fields: () => ({
        resource: { type: GraphQLString },
        parameters: { type: new GraphQLObjectType(leagueLeadersParameters) },
        resultSet: { type: new GraphQLObjectType(leagueLeadersResultSet) }
    })
})

const leagueGameLogResultSet = new GraphQLObjectType({
    name: "leagueGameLogResultSet",
    fields: () => (nbaResultSetSchema)
})

const leagueGameLogParameters = new GraphQLObjectType({
    name: "leagueGameLogParameters",
    fields: () => ({
        LeagueID: { type: GraphQLString },
        Season: { type: GraphQLString },
        SeasonType: { type: GraphQLString },
        PlayerOrTeam: { type: GraphQLString },
        Counter: { type: GraphQLInt },
        Sorter: { type: GraphQLString },
        Direction: { type: GraphQLString },
        DateFrom: { type: GraphQLString },
        DateTo: { type: GraphQLString },       
    })
})

const LeagueGameLog = {
    name: "leagueGameLog",
    fields: () => ({
        resource: { type: GraphQLString },
        parameters: { type: leagueGameLogParameters },
        resultSets: {type: new GraphQLList(leagueGameLogResultSet)}
    })
}

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
        playerInfo: {
            type: new GraphQLList(PlayerInfo),
            args: {
                playerName: {
                    type: GraphQLString
                }
            },
            resolve: (root, args) => (
                nba.stats.playerInfo({ PlayerID:  nba.findPlayer(args.playerName).playerId }).then((data) => data['commonPlayerInfo'])
            )
        },
        historicStats: {
            type: new GraphQLList(HistoricStats),
            args: {
                playerName: {
                    type: GraphQLString
                }
            },
            resolve: (root, args) => (
                nba.stats.playerProfile({ PlayerID:  nba.findPlayer(args.playerName).playerId }).then((data) => data['seasonTotalsRegularSeason'])
            )
        },
        currentStats: {
            type: new GraphQLList(CurrentStats),
            resolve: () => nba.stats.playerStats({}).then((data) => data['leagueDashPlayerStats'])
        },
        shots: {
            type: new GraphQLList(Shots),
            args: {
                playerName: {
                    type: GraphQLString
                }
            },
            resolve: (root, args) => (
                nba.stats.shots({ PlayerID:  nba.findPlayer(args.playerName).playerId }).then((data) => data['shot_Chart_Detail'])
            )
        },
        shotFreq: {
            type: new GraphQLList(ShotFreq),
            resolve: () => nba.stats.playerShooting({}).then((data) => data['leagueDashPTShots'])
        },
        teamRoster: {
            type: new GraphQLList(TeamRoster),
            args: {
                teamName: {
                    type: GraphQLString
                }
            },
            resolve: (root, args) => (
                nba.stats.commonTeamRoster({TeamID: nba.teamIdFromName(args.teamName)}).then((data) => data['commonTeamRoster'])
            )
        },
        teamShooting: {
            type: new GraphQLList(TeamShooting),
            args: {
                teamName: {
                    type: GraphQLString
                }
            },
            resolve: (root, args) => (
                nba.stats.teamShooting({TeamID: nba.teamIdFromName(args.teamName)}).then((data) => data['leagueDashPTShots'])
            )
        },
        teamStats: {
            type: new GraphQLList(TeamStats),
            resolve: () => nba.stats.teamStats().then((data) => data)
        },
        boxScores: {
            type: new GraphQLList(BoxScores),
            resolve: () => nba.stats.boxScore({ GameID: GameID }).then((data) => data['resultSets'])
        },
        scoreboard: {
            type: Scoreboard,
            resolve: () => nba.stats.scoreboard({ gameDate: currentDate }).then((data) => data)
        },
        leagueLead: {
            type: leagueLeaders,
            resolve: () => nba.stats.leagueLeaders().then((data) => data)
        },
        leagueGameLog: {
            type: new GraphQLObjectType(LeagueGameLog),
            args: {
                playerName: {
                    type: GraphQLString
                }
            },
            resolve: (root, args) => (
                nba.stats.leagueGameLog({ PlayerOrTeam: "P" })
                .then((data)=> {
                    // sort return data to return top 5 players
                    let sortedRecentGames = [];
                    let playerData = data.resultSets[0].rowSet; // playerdata is the array of array of player data
                    playerData.sort((a, b) => {
                        return new Date(b[7]) - new Date(a[7]); // index 6 is the gameid, sorts from greatest to smallest gameid
                    });

                    sortedRecentGames = playerData.filter((item) => (
                        item[2] === args.playerName
                    ))
                    data.resultSets[0].rowSet = sortedRecentGames;
                    return data;
                })
            )
        }
        // rankings: {
        //     type: new GraphQLList(Rankings),
        //     resolve: () => nba.stats.playerProfile({ PlayerID: curry.playerId }).then((data) => data["seasonRankingsRegulatSeason"])
        // }
    })
})

//nba.stats.teamPlayerDashboard({ TeamID: TeamID, SeasonType: "Regular Season"}).then((data) => console.log(data));
//nba.stats.leagueGameLog({PlayerOrTeam:"P"}).then((data)=> console.log(data))
//nba.stats.leagueLeaders({PlayerOrTeam:"P", StatCategory:"REB"}).then((data)=> console.log(data))
//nba.stats.scoreboard({ gameDate: currentDate}).then((data) => console.log(data))

function myFunction(cat) {
    return new Promise((resolve, reject) => {
        let topCategoryStats = {};
        let categories = ["PTS", "REB"];
        let iterations = [30, 70, 120, 180];
        let counter = 0;

        for (let i = 0; i < categories.length; ++i) {
            nba.stats.leagueLeaders({ PlayerOrTeam: "P", StatCategory: categories[i] })
            .then((data) => {
                let playerData = data["resultSet"]["rowSet"];
                let sum = 0;

                for (let k = 0; k < iterations[iterations.length - 1]; ++i) {
                    sum += playerData[k][22];
                    if (iterations[counter] === (k + 1)) {
                        topCategoryStats["top" + iterations[counter].toString()] = { ...topCategoryStats["top" + iterations[counter].toString()], [categories[i]]: sum / iterations[counter] };
                        counter++;
                    }
                }
            })
        }
        console.log(topCategoryStats);
        resolve(topCategoryStats);
    })
}

//Function for creating top 30, top 60, top 100
var topCatStats = {}
// let statCats = ["PTS", "REB", "AST", "STL", "BLK", "TOV"];
let statCats = ["PTS", "REB"];
let iterations = [30, 70, 120, 180];
//console.log(iterations[0])
let k = 0

async function calcTopStats(cat, iterations, topCatStats, k) {
    nba.stats.leagueLeaders({PlayerOrTeam:"P", StatCategory:cat})
    .then((data)=> {
        let sum = 0
        let tempObj = topCatStats;
        //console.log(data)
        let playerData = data['resultSet']['rowSet']
        for (i = 0; i < iterations[iterations.length - 1]  ; i++ ) {
            sum =  sum + playerData[i][22]
            if (iterations[k] === (i + 1)) {
                tempObj['top' + iterations[k].toString()] = { [cat]: sum/iterations[k] };
                //topCatStats['top' + iterations[k].toString()][cat.toLowerCase()] = sum/iterations[k]
                k++;
            }
        }
        console.log(tempObj)
        return tempObj;
    })
}

async function tempFunction(obj) {
    console.log(obj)
    for (let i = 0; i < statCats.length; ++i) {
        obj = await calcTopStats(statCats[i], iterations, topCatStats, k);
    }
    //console.log(obj);
}
let obj = {};
tempFunction(obj);
//statCats.forEach((cat) => (calcTopStats(cat, iterations, topCatStats, k)))
//calcTopStats(statCats[0], iterations, topCatStats).then((data) => console.log(data))
//console.log(nba.stats.leagueLeaders({PlayerOrTeam:"P", StatCategory:"REB"}))
module.exports = new GraphQLSchema({
    query: RootQuery
})
