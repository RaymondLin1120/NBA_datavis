import React from 'react';
import { Link } from 'react-router-dom';
import { BiBasketball } from 'react-icons/bi';
import { MdPeople, MdCompareArrows, MdSearch} from 'react-icons/md';
import { VscGraph } from 'react-icons/vsc';
import { ImEyedropper } from 'react-icons/im';
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
            <IconContext.Provider value = {{color: 'white', size: '30px'}}>
                { navIcons.map((item, index) => (
                    <li className = 'listItems' key ={index}>
                        <Link to={item.path}>
                            {item.icon}
                            <p> {item.name}</p>
                        </Link>
                    </li>
                ))}
                    <li className = 'theme-button'>
                        <ImEyedropper />
                        <p> Change Theme </p>
                    </li>
                </IconContext.Provider>
            </ul>
        </div>
    )
}
export default Sidebar