import React from "react";
import nba from "nba";
import { useHistory } from "react-router-dom";

function TeamSearchBar() {
  let history = useHistory();

  function handleSearch(e) {
    history.push(`/Team-Comparison/${e}`);
  }
  return (
    <div className="TeamSearchBar" style={{ display: "flex" }}>
      {nba.teams.map(item => (
        <>
          <div className="teamLogo" onClick={e => handleSearch(item.teamId)}>
            <img
              src={`https://www.nba.com/stats/media/img/teams/logos/${item.abbreviation}_logo.svg`}
            ></img>
            {/* <span className="tooltip">{item.teamName}</span> */}
          </div>
        </>
      ))}
    </div>
  );
}

export default TeamSearchBar;
