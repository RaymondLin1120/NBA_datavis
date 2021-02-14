import React, { useEffect } from 'react';

const teamColor = {
    atl: '#E03A3E',
    bkn: '#000000',
    bos: '#007A33',
    cha: '#00788C',
    chi: '#CE1141',
    cle: '#860038',
    dal: '#00538C',
    den: '#0E2240',
    det: '#C8102E',
    gsw: '#1D428A',
    hou: '#CE1141',
    ind: '#002D62',
    lac: '#C8102E',
    lal: '#552583',
    mem: '#5D76A9',
    mia: '#98002E',
    mil: '#00471B',
    min: '#0C2340',
    nop: '#0C2340',
    nyk: '#006BB6',
    okc: '#007AC1',
    orl: '#0077C0',
    phi: '#006BB6',
    phx: '#1D1160',
    por: '#E03A3E',
    sac: '#5A2D81',
    sas: '#C4CED4',
    tor: '#CE1141',
    uta: '#002B5C',
    was: '#002B5C'
}

export default function PlayerProfile(props) {
    
    let cats = ['min', 'pts', 'reb', 'ast', 'stl', 'blk']
    let statData = props.seasonStats[0]
    return (
        <section className="playerInfo-container" style={{background: teamColor[props.playerInfo[0].teamAbbreviation.toLowerCase()], backgroundImage: `url(https://www.nba.com/stats/media/img/teams/logos/${props.playerInfo[0].teamAbbreviation}_logo.svg)`, backgroundRepeat: 'no-repeat', backgroundSize: "contain", backgroundAttachment: 'fixed', backgroundPosition: '0% 0%', backgroundBlendMode: "soft-light" }} >

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