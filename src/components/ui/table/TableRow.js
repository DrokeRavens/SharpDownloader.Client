
function TableRow(props) {
    return (
            <tr className={props.align}>
              {props.children}
            </tr>
    );
}

export default TableRow;