import { gql } from "@apollo/client";

export const Player_Query = gql`
    query PlayerQuery ($playerName: String = "Bradley Beal") {
        historicStats (playerName: $playerName) {
            playerId
            seasonId
            pts
            reb
            ast
            fG3M
            stl
            blk
            min
            tov
            fga
            fG3A
            fgPct
            ftPct
            fg3Pct
            fta
            teamAbbreviation
        }
        playerInfo (playerName: $playerName) {
            personId
            displayFirstLast
            jersey
            position
            teamName
            teamCity
        }
          leagueGameLog(playerName: $playerName) {
            resource,
            parameters {
              LeagueID
              Season
              SeasonType
              PlayerOrTeam
              Counter
              Sorter
              Direction
              DateFrom
              DateTo
            },
            resultSets {
              name
              headers
              rowSet
            }
        }
    }
`
leagueGameLog(playerId: $playerId) {
  resource,
  parameters {
    LeagueID
    Season
    SeasonType
    PlayerOrTeam
    Counter
    Sorter
    Direction
    DateFrom
    DateTo
  },
  resultSets {
    name
    headers
    rowSet
  }
}