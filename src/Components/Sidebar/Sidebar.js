import React from 'react';
import { Link } from 'react-router-dom';
import { BiBasketball } from 'react-icons/bi';
import { MdPeople, MdCompareArrows, MdSearch} from 'react-icons/md';
import { VscGraph } from 'react-icons/vsc';
import { IconContext } from 'react-icons/lib';

const navIcons = [
    {
        title: 'Home',
        name: 'Home',
        icon: <BiBasketball />,
        path: '/Home'
    },
    {
        title: 'Search',
        name: 'Categories',
        icon: <MdSearch />,
        path: '/Categories'
    },
    {
        title: 'Player',
        name: 'Player Stats',
        icon:<VscGraph className = "nav-Icons"/>,
        path: '/Player'
    },
    {
        title: 'Player-Comparison',
        name: 'Compare',
        icon: <MdCompareArrows className = "nav-Icons"/>,
        path: '/Player-Comparison'
    },
    {
        title: 'Team-Comparison',
        name: 'Team Comparison',
        icon: <MdPeople />,
        path: '/Team-Comparison'
    }
]


function Sidebar() {
    return (
        <div className = "sidebar-container">
            <ul>    
            { navIcons.map((item, index) => (
                <IconContext.Provider value = {{color: 'white', size: '30px'}}>
                    <li className = 'listItems' key ={index}>
                        <Link to={item.path}>
                            {item.icon}
                            <p> {item.name}</p>
                        </Link>
                    </li>
                </IconContext.Provider>
            ))}
            </ul>
        </div>
    )
}
export default Sidebar