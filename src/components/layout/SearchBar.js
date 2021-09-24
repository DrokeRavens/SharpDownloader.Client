import classes from './SearchBar.module.css'
import { IoIosSearch } from "react-icons/io";

function SearchBar(){
    return <>
        <div>
            <form>
                <div className={classes.input_container}>
                    <input type="text" name="name" placeholder="Search..." />
                    <button type="submit">
                        <IoIosSearch />
                    </button>
                </div>
            </form>
        </div>
     </>
}

export default SearchBar;