const { query } = require('express');
const {
    GraphQLObjectType, 
    GraphQLFloat,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema, 
    GraphQLScalarType,
    GraphQLJSON,
    GraphQLBoolean
    } = require('graphql');

const nba = require('nba');

const playerName = "";
const curry = nba.findPlayer('James Harden');
const TeamID = nba.teamIdFromName("Hou");
const GameID = "0021401082";

var d = new Date();
var currentDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear()

var topCatStats = {}
let statCats = [
    {
        cat:"PTS",
        index: 22
    },
    {
        cat:"REB",
        index: 17
    },
    {
        cat:"AST",
        index: 18
    }, 
    {
        cat:"STL",
        index: 19
    },
    {
        cat:"BLK",
        index: 20
    },
    {
        cat: "TOV",
        index: 21
    },
];

let iterations = [30, 70, 120, 180];
let k = 0

let tempObj = {}

async function calcTopStats(cat, iterations, k) {
    await nba.stats.leagueLeaders({PlayerOrTeam:"P", StatCategory:cat.cat})
    .then((data)=> {
        let sum = 0
        // let tempObj = topCatStats;
        //console.log(data)
        let playerData = data['resultSet']['rowSet']
        for (i = 0; i < iterations[iterations.length - 1]  ; i++ ) {
            sum =  sum + playerData[i][cat.index]
            if (iterations[k] === (i + 1)) {
                tempObj['top' + iterations[k].toString()] = {...tempObj['top' + iterations[k].toString()], [cat.cat]: sum/iterations[k] };
                //tempObj['top' + iterations[k].toString()] = { [cat.cat]: (sum/iterations[k]).toFixed(2) };
                k++;
            }
        }
        return tempObj
    })
}

async function tempFunction() {
    let obj = {}
    for (let i = 0; i < statCats.length; ++i) {
    //    obj = await calcTopStats(statCats[i], iterations, k)
       await calcTopStats(statCats[i], iterations, k)
    }
    for (let j = 0; j < iterations.length; ++j) {
        tempObj['top' + iterations[j].toString()].seasonId = 'top' + iterations[j].toString()
    }
    //obj = tempObj
    return tempObj
}

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
        gameHeader: { type: new GraphQLList(gameHeader) },
        lineScore: { type: new GraphQLList(lineScore) },
        eastConfStandingsByDay: { type: new GraphQLList(confStandingsByDay) },
        westConfStandingsByDay: { type: new GraphQLList(confStandingsByDay) }
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
        resultSets: { type: new GraphQLList(leagueGameLogResultSet) }
    })
}

const playerStats = new GraphQLObjectType({
    name: "playerStats",
    fields: () => ({
        seasonId: { type: GraphQLString },
        PTS: { type: GraphQLFloat },
        REB: { type: GraphQLFloat },
        AST: { type: GraphQLFloat },
        STL: { type: GraphQLFloat },
        BLK: { type: GraphQLFloat },
        TOV: { type: GraphQLFloat }
    })
})
const TopStats = new GraphQLObjectType({
    name: "topStats",
    fields: () => ({
         top30: { type: playerStats },
         top70: { type: playerStats },
         top120: { type: playerStats },
         top180: { type: playerStats }
    })
})

const teamSitesOnly = new GraphQLObjectType({
    name: "teamSiteInfo",
    fields: () => ({
        teamKey: { type:  GraphQLString },
        teamName: { type:  GraphQLString },
        teamCode: { type:  GraphQLString },
        teamNickname: { type:  GraphQLString },
        teamTricode: { type:  GraphQLString },
        streakText: { type:  GraphQLString }
    })
})
const Standings = new GraphQLObjectType({
    name: "standings",
    fields: () => ({
        teamId: { type:  GraphQLString },
        win: { type:  GraphQLString },
        loss: { type:  GraphQLString },
        winPct: { type:  GraphQLString },
        winPctV2: { type:  GraphQLString },
        lossPct: { type:  GraphQLString },
        lossPctV2: { type:  GraphQLString },
        gamesBehind: { type:  GraphQLString },
        divGamesBehind: { type:  GraphQLString },
        clinchedPlayoffsCode: { type:  GraphQLString },
        clinchedPlayoffsCodeV2: { type:  GraphQLString },
        confRank: { type:  GraphQLString },
        confWin: { type:  GraphQLString },
        confLoss: { type:  GraphQLString },
        divWin: { type:  GraphQLString },
        divLoss: { type:  GraphQLString },
        homeWin: { type:  GraphQLString },
        homeLoss: { type:  GraphQLString },
        awayWin: { type:  GraphQLString },
        awayLoss: { type:  GraphQLString },
        lastTenWin: { type:  GraphQLString },
        lastTenLoss: { type:  GraphQLString },
        streak: { type:  GraphQLString },
        divRank: { type:  GraphQLString },
        isWinStreak: { type:  GraphQLBoolean },
        teamSitesOnly: { type: teamSitesOnly}
    })
})

const catchShoot = new GraphQLObjectType({
    name: "catchShootStats",
    fields: () => ({
        playerId: { type: GraphQLInt },
        playerName: { type: GraphQLString },
        teamId: { type: GraphQLInt },
        teamAbbreviation: { type: GraphQLString },
        gp: { type: GraphQLInt },
        w: { type: GraphQLInt },
        l: { type: GraphQLInt },
        min: { type: GraphQLFloat },
        catchShootFgm: { type: GraphQLFloat },
        catchShootFga: { type: GraphQLFloat },
        catchShootFgPct: { type: GraphQLFloat },
        catchShootPts: { type: GraphQLFloat },
        catchShootFg3m: { type: GraphQLFloat },
        catchShootFg3a: { type: GraphQLFloat },
        catchShootFg3Pct: { type: GraphQLFloat },
        catchShootEfgPct: { type: GraphQLFloat }
    })
})

const drives = new GraphQLObjectType({
    name: "drives",
    fields: () => ({
        playerId: { type: GraphQLInt },
        playerName: { type: GraphQLString },
        teamId: { type: GraphQLInt },
        teamAbbreviation: { type: GraphQLString },
        gp: { type: GraphQLInt },
        w: { type: GraphQLInt },
        l: { type: GraphQLInt },
        min: { type: GraphQLFloat },
        drives: { type: GraphQLFloat },
        driveFgm: { type: GraphQLFloat },
        driveFga: { type: GraphQLFloat },
        driveFgPct: { type: GraphQLFloat },
        driveFtm: { type: GraphQLFloat },
        driveFta: { type: GraphQLFloat },
        driveFtPct: { type: GraphQLFloat },
        drivePts: { type: GraphQLFloat },
        drivePtsPct: { type: GraphQLFloat },
        drivePasses: { type: GraphQLFloat },
        drivePassesPct: { type: GraphQLFloat },
        driveAst: { type: GraphQLFloat },
        driveAstPct: { type: GraphQLFloat },
        driveTov: { type: GraphQLFloat },
        driveTovPct: { type: GraphQLFloat },
        drivePf: { type: GraphQLFloat },
        drivePfPct: { type: GraphQLFloat }
    }),
})

const passing = new GraphQLObjectType({
    name: "passing",
    fields: () => ({
        playerId: { type: GraphQLInt },
        playerName: { type: GraphQLString },
        teamId: { type: GraphQLInt },
        teamAbbreviation: { type: GraphQLString },
        gp: { type: GraphQLInt },
        w: { type: GraphQLInt },
        l: { type: GraphQLInt },
        min: { type: GraphQLFloat },
        passesMade: { type: GraphQLFloat },
        passesReceived: { type: GraphQLFloat },
        ast: { type: GraphQLFloat },
        ftAst: { type: GraphQLFloat },
        secondaryAst: { type: GraphQLFloat },
        potentialAst: { type: GraphQLFloat },
        astPointsCreated: { type: GraphQLFloat },
        astAdj: { type: GraphQLFloat },
        astToPassPct: { type: GraphQLFloat },
        astToPassPctAdj: { type: GraphQLFloat }
    }),
})

const possessions = new GraphQLObjectType({
    name: "possessions",
    fields: () => ({
        playerId: { type: GraphQLInt },
        playerName: { type: GraphQLString },
        teamId: { type: GraphQLInt },
        teamAbbreviation: { type: GraphQLString },
        gp: { type: GraphQLInt },
        w: { type: GraphQLInt },
        l: { type: GraphQLInt },
        min: { type: GraphQLFloat },
        touches: { type: GraphQLFloat },
        frontCtTouches: { type: GraphQLFloat },
        timeOfPoss: { type: GraphQLFloat },
        avgSecPerTouch: { type: GraphQLFloat },
        avgDribPerTouch: { type: GraphQLFloat },
        ptsPerTouch: { type: GraphQLFloat },
        elbowTouches: { type: GraphQLFloat },
        postTouches: { type: GraphQLFloat },
        paintTouches: { type: GraphQLFloat },
        ptsPerElbowTouch: { type: GraphQLFloat },
        ptsPerPostTouch: { type: GraphQLFloat },
        ptsPerPaintTouch: { type: GraphQLFloat }
    }),
})

const rebounding = new GraphQLObjectType({
    name: "rebounding",
    fields: () => ({
        playerId: { type: GraphQLInt },
        playerName: { type: GraphQLString },
        teamId: { type: GraphQLInt },
        teamAbbreviation: { type: GraphQLString },
        gp: { type: GraphQLInt },
        w: { type: GraphQLInt },
        l: { type: GraphQLInt },
        min: { type: GraphQLFloat },
        oreb: { type: GraphQLFloat },
        orebContest: { type: GraphQLFloat },
        orebUncontest: { type: GraphQLFloat },
        orebContestPct: { type: GraphQLFloat },
        orebChances: { type: GraphQLFloat },
        orebChancePct: { type: GraphQLFloat },
        orebChanceDefer: { type: GraphQLFloat },
        orebChancePctAdj: { type: GraphQLFloat },
        avgOrebDist: { type: GraphQLFloat },
        dreb: { type: GraphQLFloat },
        drebContest: { type: GraphQLFloat },
        drebUncontest: { type: GraphQLFloat },
        drebContestPct: { type: GraphQLFloat },
        drebChances: { type: GraphQLFloat },
        drebChancePct: { type: GraphQLFloat },
        drebChanceDefer: { type: GraphQLFloat },
        drebChancePctAdj: { type: GraphQLFloat },
        avgDrebDist: { type: GraphQLFloat },
        reb: { type: GraphQLFloat },
        rebContest: { type: GraphQLFloat },
        rebUncontest: { type: GraphQLFloat },
        rebContestPct: { type: GraphQLFloat },
        rebChances: { type: GraphQLFloat },
        rebChancePct: { type: GraphQLFloat },
        rebChanceDefer: { type: GraphQLFloat },
        rebChancePctAdj: { type: GraphQLFloat },
        avgRebDist: { type: GraphQLFloat }
    }),
})

const defense = new GraphQLObjectType({
    name: "defense",
    fields: () => ({
        playerId: { type: GraphQLInt },
        playerName: { type: GraphQLString },
        teamId: { type: GraphQLInt },
        teamAbbreviation: { type: GraphQLString },
        gp: { type: GraphQLInt },
        w: { type: GraphQLInt },
        l: { type: GraphQLInt },
        min: { type: GraphQLFloat },
        stl: { type: GraphQLFloat },
        blk: { type: GraphQLFloat },
        dreb: { type: GraphQLFloat },
        defRimFgm: { type: GraphQLFloat },
        defRimFga: { type: GraphQLFloat },
        defRimFgPct: { type: GraphQLFloat }
    }),
})

const efficiency = new GraphQLObjectType({
    name: "efficiency",
    fields: () => ({
        playerId: { type: GraphQLInt },
        playerName: { type: GraphQLString },
        teamId: { type: GraphQLInt },
        teamAbbreviation: { type: GraphQLString },
        gp: { type: GraphQLInt },
        w: { type: GraphQLInt },
        l: { type: GraphQLInt },
        min: { type: GraphQLFloat },
        points: { type: GraphQLFloat },
        drivePts: { type: GraphQLFloat },
        driveFgPct: { type: GraphQLFloat },
        catchShootPts: { type: GraphQLFloat },
        catchShootFgPct: { type: GraphQLFloat },
        pullUpPts: { type: GraphQLFloat },
        pullUpFgPct: { type: GraphQLFloat },
        paintTouchPts: { type: GraphQLFloat },
        paintTouchFgPct: { type: GraphQLFloat },
        postTouchPts: { type: GraphQLFloat },
        postTouchFgPct: { type: GraphQLFloat },
        elbowTouchPts: { type: GraphQLFloat },
        elbowTouchFgPct: { type: GraphQLFloat },
        effFgPct: { type: GraphQLFloat }
    }),
})

const pullupshooting = new GraphQLObjectType({
    name: "pullupshooting",
    fields: () => ({
        playerId: { type: GraphQLInt },
        playerName: { type: GraphQLString },
        teamId: { type: GraphQLInt },
        teamAbbreviation: { type: GraphQLString },
        gp: { type: GraphQLInt },
        w: { type: GraphQLInt },
        l: { type: GraphQLInt },
        min: { type: GraphQLFloat },
        pullUpFgm: { type: GraphQLFloat },
        pullUpFga: { type: GraphQLFloat },
        pullUpFgPct: { type: GraphQLFloat },
        pullUpPts: { type: GraphQLFloat },
        pullUpFg3m: { type: GraphQLFloat },
        pullUpFg3a: { type: GraphQLFloat },
        pullUpFg3Pct: { type: GraphQLFloat },
        pullUpEfgPct: { type: GraphQLFloat },
    }),
})

const speedDistance = new GraphQLObjectType({
    name: "speedDistance",
    fields: () => ({
        playerId: { type: GraphQLInt },
        playerName: { type: GraphQLString },
        teamId: { type: GraphQLInt },
        teamAbbreviation: { type: GraphQLString },
        gp: { type: GraphQLInt },
        w: { type: GraphQLInt },
        l: { type: GraphQLInt },
        min: { type: GraphQLFloat },
        mIN1: { type: GraphQLFloat },
        distFeet: { type: GraphQLFloat },
        distMiles: { type: GraphQLFloat },
        distMilesOff: { type: GraphQLFloat },
        distMilesDef: { type: GraphQLFloat },
        avgSpeed: { type: GraphQLFloat },
        avgSpeedOff: { type: GraphQLFloat },
        avgSpeedDef: { type: GraphQLFloat }
    }),
})

const PlayerTracking = new GraphQLObjectType({
    name: "playerTracking",
    fields: () => ({
        catchShoot: {
            type: new GraphQLList(catchShoot),
            resolve: () => { return nba.stats.playerTracking({PtMeasureType: "CatchShoot"}).then((data) => data.leagueDashPtStats)}
        }
        // drives: {
        //     type: drives,
        //     resolve: () => {
        //         nba.stats.playerTracking({PtMeasureType: "CatchShoot"}).then((data) => data.leagueDashPtStats)
        //     }
        // }
        // drives: {
        //     type: drives,
        //     resolve: (player) => {
        //         return nba.stats.playerTracking({PtMeasureType: "Drives"}).then((data) => 
        //         data.leagueDashPtStats.find(player => player.playerId === catchShoot.playerId))
        //     }
        // }
        // possessions: {
        //     type: possessions,
        //     resolve: (player) => {
        //         return nba.stats.playerTracking({PtMeasureType: "Possessions"}).then((data) => 
        //         data.leagueDashPtStats.find(player => player.playerId === catchShoot.playerId))
        //     }
        // }
        // pullUpShots: {
        //     type: pullupshooting,
        //     resolve: (player) => {
        //         return nba.stats.playerTracking({PtMeasureType: "PullUpShots"}).then((data) => 
        //         data.leagueDashPtStats.find(player => player.playerId === catchShoot.playerId))
        //     }
        // }
        // efficiency: {
        //     type: efficiency,
        //     resolve: (player) => {
        //         return nba.stats.playerTracking({PtMeasureType: "Efficiency"}).then((data) => 
        //         data.leagueDashPtStats.find(player => player.playerId === catchShoot.playerId))
        //     }
        // }
        // defense: {
        //     type: defense,
        //     resolve: (player) => {
        //         return nba.stats.playerTracking({PtMeasureType: "Defense"}).then((data) => 
        //         data.leagueDashPtStats.find(player => player.playerId === catchShoot.playerId))
        //     }
        // }
        // rebounding: {
        //     type: rebounding,
        //     resolve: (player) => {
        //         return nba.stats.playerTracking({PtMeasureType: "Rebounding"}).then((data) => 
        //         data.leagueDashPtStats.find(player => player.playerId === catchShoot.playerId))
        //     }
        // }
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
        playerInfo: {
            type: new GraphQLList(PlayerInfo),
            args: {
                playerId: {
                    type: GraphQLInt
                }
            },
            resolve: (root, args) => (
                nba.stats.playerInfo({ PlayerID: args.playerId }).then((data) => data['commonPlayerInfo'])
            )
        },
        historicStats: {
            type: new GraphQLList(HistoricStats),
            args: {
                playerId: {
                    type: GraphQLInt
                }
            },
            resolve: (root, args) => (
                nba.stats.playerProfile({ PlayerID:  args.playerId }).then((data) => data['seasonTotalsRegularSeason'])
            )
        },
        currentStats: {
            type: new GraphQLList(CurrentStats),
            resolve: () => nba.stats.playerStats({}).then((data) => data['leagueDashPlayerStats'])
        },
        shots: {
            type: new GraphQLList(Shots),
            args: {
                playerId: {
                    type: GraphQLInt
                }
            },
            resolve: (root, args) => (
                nba.stats.shots({ PlayerID:  args.playerId }).then((data) => data['shot_Chart_Detail'])
            )
        },
        shotFreq: {
            type: new GraphQLList(ShotFreq),
            resolve: () => nba.stats.playerShooting({}).then((data) => data['leagueDashPTShots'])
        },
        teamRoster: {
            type: new GraphQLList(TeamRoster),
            args: {
                teamId: {
                    type: GraphQLInt
                }
            },
            resolve: (root, args) => (
                nba.stats.commonTeamRoster({TeamID: teamId}).then((data) => data['commonTeamRoster'])
            )
        },
        teamShooting: {
            type: new GraphQLList(TeamShooting),
            args: {
                teamId: {
                    type: GraphQLInt
                }
            },
            resolve: (root, args) => (
                nba.stats.teamShooting({TeamID: teamId}).then((data) => data['leagueDashPTShots'])
            )
        },
        teamStats: {
            type: new GraphQLList(TeamStats),
            resolve: () => nba.stats.teamStats().then((data) => data)
        },
        boxScores: {
            type: new GraphQLList(BoxScores),
            args: {
                gameId: {
                    type: GraphQLInt
                }
            },
            resolve: () => nba.stats.boxScore({ GameID: gameId }).then((data) => data['resultSets'])
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
                playerId: {
                    type: GraphQLInt
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
                        item[1] === args.playerId
                    ))
                    data.resultSets[0].rowSet = sortedRecentGames;
                    return data;
                })
            )
        },
        standings: {
            type: new GraphQLList(Standings),
            resolve: () => nba.data.standings().then((data) => data.league.standard.teams)
        },
        catchShoot: {
            type: new GraphQLList(catchShoot),
            resolve: ()=> nba.stats.playerTracking({PtMeasureType: "CatchShoot"}).then((data) => data.leagueDashPtStats)
            
        },
        drives: {
            type: new GraphQLList(drives),
            resolve: ()=> nba.stats.playerTracking({PtMeasureType: "Drives"}).then((data) => data.leagueDashPtStats)
        },
        rebounding: {
            type: new GraphQLList(rebounding),
            resolve: ()=> nba.stats.playerTracking({PtMeasureType: "Rebounding"}).then((data) => data.leagueDashPtStats)
        },
        possessions: {
            type: new GraphQLList(possessions),
            resolve: ()=> nba.stats.playerTracking({PtMeasureType: "Possessions"}).then((data) => data.leagueDashPtStats)
        },
        defense: {
            type: new GraphQLList(defense),
            resolve: ()=> nba.stats.playerTracking({PtMeasureType: "Defense"}).then((data) => data.leagueDashPtStats)
        },
        passing: {
            type: new GraphQLList(passing),
            resolve: ()=> nba.stats.playerTracking({PtMeasureType: "Passing"}).then((data) => data.leagueDashPtStats)
        },
        pullupShot: {
            type: new GraphQLList(pullupshooting),
            resolve: ()=> nba.stats.playerTracking({PtMeasureType: "PullupShot"}).then((data) => data.leagueDashPtStats)
        },
        efficiency: {
            type: new GraphQLList(pullupshooting),
            resolve: ()=> nba.stats.playerTracking({PtMeasureType: "Efficiency"}).then((data) => data.leagueDashPtStats)
        },
        speedDistance: {
            type: new GraphQLList(speedDistance),
            resolve: ()=> nba.stats.playerTracking({PtMeasureType: "speedDistance"}).then((data) => data.leagueDashPtStats)
        },
        topStats: {
            type: TopStats,
            resolve: () => tempFunction()
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

let listOfTracking = ["Drives", "CatchShoot", "Passing", "PullupShot", "Possessions", "Rebounding", "Defense","Efficiency", "SpeedDistance", "ElbowTouch", "PostTouch", "PaintTouch"]
//nba.stats.playerTracking({PtMeasureType: "SpeedDistance"}).then((data) => console.log(data.leagueDashPtStats))
//nba.stats.boxScoreSummary({GameID: "0021401082"}).then((data) => console.log(data.resultSets[8]))
//nba.data.teamLeaders("2020", 1610612764).then((data) => console.log(data.league.standard))
//nba.stats.playByPlay({GameID: "0021401082"}).then((data) => console.log(data))
//nba.stats.shots({ PlayerID: 201939 }).then((data) => console.log(data['shot_Chart_Detail']))




//Function for creating top 30, top 60, top 100


//statCats.forEach((cat) => (calcTopStats(cat, iterations, topCatStats, k)))
//calcTopStats(statCats[0], iterations, topCatStats).then((data) => console.log(data))
//console.log(nba.stats.leagueLeaders({PlayerOrTeam:"P", StatCategory:"REB"}))
// console.log(nba.teams)
module.exports = new GraphQLSchema({
    query: RootQuery
})
