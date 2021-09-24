import classes from './Table.module.css'
import PropTypes from 'prop-types';
import Pagination from './Pagination';
function Table(props) {
    return (
        <div>
            <table className={classes.styled_table}>
                {props.children}
            </table>
            {props.pagination ? <Pagination onPageChange={props.onPageChange} /> : null}
        </div>
        
    );
}

Table.defaultProps = {
    pagination: false
}

Table.propTypes = {
    pagination: PropTypes.bool,
    onPageChange: PropTypes.func
}
export default Table;