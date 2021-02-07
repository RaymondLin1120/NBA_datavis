import React, { useEffect } from 'react';
import nba from 'nba'
export default function PlayerProfile(props) {
    return (
        <section className="playerInfo-container">
        <div className="player-headshot">
            <img src = {`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${props.playerInfo[0].personId}.png`}></img>
            <p> {props.playerInfo[0].personId} </p>
            <p> {nba.teamIdFromName("Washington Wizards")} </p>
            <p> {props.playerInfo.displayFirstLast}</p>
        </div>
       
        <div className="playerInfo">
            <p> Name: {props.playerInfo[0].displayFirstLast} </p>
            <p> Team: {props.playerInfo[0].teamCity} {props.playerInfo[0].teamName} </p>
            <p> Position: {props.playerInfo[0].position} </p>
            <p> Jersey: {props.playerInfo[0].jersey} </p>
        </div>
    </section>
    )
}