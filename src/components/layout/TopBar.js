import {IoMdSettings, IoMdArrowRoundUp, IoMdArrowRoundDown} from 'react-icons/io'
import classes from './TopBar.module.css'
import SearchBar from './SearchBar'
import { useState } from 'react/cjs/react.development'
import Configuration from './Configuration'

function TopBar(){
    const [configurationModalIsOpen, setConfigurationModalState] = useState(false);
    return (
        <div class={classes.topnav}>
            <SearchBar />
            <div className={classes.right__content}>
                <p>9 mbs <IoMdArrowRoundDown color="yellow" /></p>
                <p>200 kbs <IoMdArrowRoundUp color="pink"/></p>
                <IoMdSettings onClick={() => setConfigurationModalState(true)}/>
            </div>
            {configurationModalIsOpen && <Configuration backDropOnClick={() => setConfigurationModalState(false)} />}
        </div>
    )
}

export default TopBar;