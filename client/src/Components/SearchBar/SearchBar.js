import React from 'react'
import { IconContext } from 'react-icons/lib';
import { MdSearch } from 'react-icons/md';

function SearchBar(props) {
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
                                props.setCurrentPlayer(e.target.value)
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
