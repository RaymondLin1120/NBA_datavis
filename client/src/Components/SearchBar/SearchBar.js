import React from 'react'
import { IconContext } from 'react-icons/lib';
import { MdSearch } from 'react-icons/md';
import { useHistory } from "react-router-dom";
import nba from 'nba';

function SearchBar(props) {
    let history = useHistory();

    function handleSearch(e) {
/*         props.setCurrentPlayer();
        props.setDataLoaded(false); */
        history.push(`/Player/${nba.findPlayer(e.target.value).playerId}`)
    }
    return (
        <div className = "toolbarContainer">
            <form className = "searchBar">
                <div className = "inputBox">
                    <input className = "textBox" 
                        type="text" 
                        placeholder="Search player..."
                        autoComplete="off"
                        onChange = {(e) => {
                        }}
                        onKeyDown = {(e) => {
                            if (e.key === 'Enter') {
                                handleSearch(e);
                            }}}>
                    </input>
                    <IconContext.Provider value = {{ size: '25px'}}>
                        <MdSearch onClick = {(e) => props.setCurrentPlayer(document.getElementsByClassName("textBox").value)}/>
                    </IconContext.Provider>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
