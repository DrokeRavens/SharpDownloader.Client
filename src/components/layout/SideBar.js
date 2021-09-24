import { NavLink } from 'react-router-dom'

import classes from './SideBar.module.css'
import {IoHomeSharp} from 'react-icons/io5'
import {IoAddOutline} from 'react-icons/io5'
import {IoList} from 'react-icons/io5'

function SideBar(){

    return (
        <div class={classes.sidenav}>
            <NavLink exact to="/"
            activeStyle={{
                fontWeight: "bold",
                color: "#171717"
              }}>
                <IoHomeSharp />
            </NavLink>
            <NavLink to="/new"
            activeStyle={{
                fontWeight: "bold",
                color: "#171717"
              }}>
                <IoAddOutline />    
            </NavLink>
            <NavLink to="/list"
            activeStyle={{
                fontWeight: "bold",
                color: "#171717"
              }}>
                <IoList />
            </NavLink>
        </div>
    )
}

export default SideBar;