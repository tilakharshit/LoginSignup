import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbarmenu.css';


const Navbarmenu = () => {
   
    return (
        <>
        <div className='mein_menu'>
        <NavLink exact activeClassName="active_class" to = '/' >Sign up</NavLink>
        <NavLink exact activeClassName="active_class" to = '/Login' >Login</NavLink>
        <NavLink exact activeClassName="active_class" to = '/Form' >Form</NavLink>

        </div>
        </>
    )

}


export default Navbarmenu;

