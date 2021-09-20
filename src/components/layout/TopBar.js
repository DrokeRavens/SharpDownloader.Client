import { Link } from 'react-router-dom'

import classes from './TopBar.module.css'
import SearchBar from './SearchBar'

function TopBar(){

    return (
        <div class={classes.topnav}>
            <SearchBar />
        </div>
    )
}

export default TopBar;