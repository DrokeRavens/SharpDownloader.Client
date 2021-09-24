import Table from '../ui/table/Table'
import TableHead from '../ui/table/TableHead'
import TableBody from '../ui/table/TableBody'
import TableRow from '../ui/table/TableRow'
import TableData from '../ui/table/TableData'
import TableHeadData from '../ui/table/TableHeadData'
import ProgressBar from '../ui/ProgressBar'

function ActiveDownloads(props){
    function pageChange(page){
        console.log('page changed' + page);
    }
    return(
        <div>
            <Table pagination={true} onPageChange={pageChange}>
                <TableHead >
                    <TableRow>
                        {props.headers.map((head) => <TableHeadData>
                            {head}
                        </TableHeadData>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.data.map((currentData) => <TableRow>{Object.keys(currentData).map((prop) => <TableData>{prop === 'progress' ? <ProgressBar currentValue={currentData[prop]}/> : currentData[prop]}</TableData>) }</TableRow> )
                    }
                </TableBody>
            </Table>
        </div>
        
    )

}

export default ActiveDownloads;