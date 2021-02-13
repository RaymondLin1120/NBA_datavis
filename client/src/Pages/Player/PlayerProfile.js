import React, { useEffect } from 'react';
import nba from 'nba'

export default function PlayerProfile(props) {
    
    let cats = ['min', 'pts', 'reb', 'ast', 'stl', 'blk']
    let statData = props.seasonStats[0]
    console.log(props.playerInfo)
    console.log(statData)
    return (
        <section className="playerInfo-container" style={{background: "#552583", backgroundImage: "url(https://www.nba.com/stats/media/img/teams/logos/LAL_logo.svg)", backgroundRepeat: 'no-repeat', backgroundSize: "contain", backgroundAttachment: 'fixed', backgroundPosition: '0% 0%', backgroundBlendMode: "soft-light" }} >

            <div className="playerInfo">
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <img src = {`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${props.playerInfo[0].personId}.png`}></img>
                    <div>
                        <div className="playerInfo-name"> {props.playerInfo[0].displayFirstLast} </div>
                        <div className="playerInfo-otherInfo"> 
                            <span>{props.playerInfo[0].teamCity} {props.playerInfo[0].teamName}</span>
                        </div>
                        <div className="playerInfo-otherInfo"> Position: {props.playerInfo[0].position} </div>
                        <div className="playerInfo-otherInfo"> Jersey: {props.playerInfo[0].jersey} </div>
                    </div>
                    {/* <p> Team: {props.playerInfo[0].teamCity} {props.playerInfo[0].teamName} </p>
                    <p> Position: {props.playerInfo[0].position} </p>
                    <p> Jersey: {props.playerInfo[0].jersey} </p> */}
                </div>

                <div className="statBox">
                    <div className="statBox-title">
                        <p>Current Season Stats</p>
                    </div>

                    <div className="statBox-container">
                    {cats.map((item) => (
                        <>
                            <div className="statBox-outline">
                                <div className="statBox-value"> {props.seasonStats[0][item]} </div>
                                <div> {item.toUpperCase()} </div>
                            </div>
                        </>
                    ))}
                    </div>
                </div>
            </div>

            <div >

            </div>

        </section>
    )
}