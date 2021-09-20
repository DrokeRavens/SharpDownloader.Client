import { Link } from 'react-router-dom'

import classes from './SideBar.module.css'
import {IoHomeSharp} from 'react-icons/io5'
import {IoAddOutline} from 'react-icons/io5'
import {IoList} from 'react-icons/io5'

function SideBar(){

    return (
        <div class={classes.sidenav}>
            <Link to="/">
                <IoHomeSharp />
            </Link>
            <Link to="/">
                <IoAddOutline />
            </Link>
            <Link to="/">
                <IoList />
            </Link>
        </div>
    )
}

export default SideBar;