import React, { useEffect } from 'react';
import axios from 'axios';

function Player() {
    useEffect(() => {
        axios.get("http://localhost:8080/player")
        .then((data) => {
            console.log(data);
        })
    }, []);

    return (
        <div>
            <p>test</p>
        </div>
    )
}

export default Player;