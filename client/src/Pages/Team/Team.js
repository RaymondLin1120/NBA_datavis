import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import nba from "nba";
import TeamSearchBar from "../../Components/TeamSearchBar/TeamSearchBar";
import { useParams } from "react-router-dom";
import { MdBlock } from "react-icons/md";

const Team_Query = gql`
  query TeamQuery($teamId: Int!) {
    teamStats {
      teamId
      teamName
      gp
      w
      l
      wPct
      min
      fgm
      fga
      fgPct
      fG3M
      fG3A
      fg3Pct
      ftm
      fta
      ftPct
      oreb
      dreb
      reb
      ast
      tov
      stl
      blk
      blka
      pf
      pfd
      pts
      plusMinus
      gpRank
      wRank
      lRank
      wPctRank
      minRank
      fgmRank
      fgaRank
      fgPctRank
      fg3mRank
      fg3aRank
      fg3PctRank
      ftmRank
      ftaRank
      ftPctRank
      orebRank
      drebRank
      rebRank
      astRank
      tovRank
      stlRank
      blkRank
      blkaRank
      pfRank
      pfdRank
      ptsRank
      plusMinusRank
      cfid
      cfparams
    }
    teamRoster(teamId: $teamId) {
      teamID
      season
      leagueID
      player
      playerSlug
      num
      position
      height
      weight
      birthDate
      age
      exp
      school
      playerId
    }
  }
`;

function Team({ match }) {
  const { id } = match.params;
  //const [seasonStats, setSeasonStats] = useState([]);

  const [currentTeam, setCurrentTeam] = useState(parseInt(id));

  const { loading, error, data } = useQuery(Team_Query, {
    variables: { teamId: currentTeam },
  });

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    setDataLoaded(false);
    if (id) {
      if (!loading) {
        setDataLoaded(true);
      }
    }
  }, [data]);
  if (loading) return "Loading...";

  return (
    <div className="playerPageContainer">
      <TeamSearchBar />
      {!id && <div>Loading</div>}
      {dataLoaded && !error && id && (
        <>
          <div>{/* <Boxscores data={playerGames} /> */}</div>
        </>
      )}
      {error && id && <div> {error.message} </div>}
      {!dataLoaded && id && <div>Loading</div>}
    </div>
  );
}

export default Team;
