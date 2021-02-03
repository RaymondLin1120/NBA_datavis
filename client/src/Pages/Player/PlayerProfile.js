import React from 'react';

export default function PlayerProfile(props) {
    return (
        <section className="playerInfo-container">
        <div className="player-headshot">
            <img src = {require("../../Assets/Images/avatar.png")}></img>
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