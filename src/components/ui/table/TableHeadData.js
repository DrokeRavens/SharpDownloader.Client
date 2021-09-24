
function TableHeadData(props) {
    return (
            <th className={props.align}>
              {props.children}
            </th>
    );
}

export default TableHeadData;