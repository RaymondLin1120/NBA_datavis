import React from 'react'
import { MdSearch } from 'react-icons/md';

function SearchBar() {
    return (
        <div className = "toolbarContainer">
            <form className = "searchBar">
                <input className = "inputBox" type="text" placeholder="Type something to search ..." autocomplete="off"></input>
                <MdSearch className = "searchButton"/>
            </form>
        </div>
    )
}

export default SearchBar
