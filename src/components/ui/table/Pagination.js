import classes from './Pagination.module.css'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';
function Pagination({
    pageNumber,
    perPage,
    totalItens,
    maxPages,
    onPageChange,
}){
    function range(start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
      }

    const totalPages = Math.ceil(totalItens / perPage);
    const [currentPage, setPage] = useState(pageNumber);
    useEffect(() => 
        onPageChange(currentPage)
    , [currentPage])

    var minPage = currentPage - Math.floor(maxPages / 2);
    var maxPage = currentPage + Math.floor(maxPages / 2);
    if(minPage < 1){
        maxPage += (minPage * -1) + 1;
        minPage = 1;
    }
    if(maxPage > totalPages){
        minPage -= maxPage - currentPage;
        maxPage = totalPages;
    }

    const pageRange = range(minPage, maxPage);
    
    return (
        <div className={classes.pagination__content}>
            <ul>
                <li className={classes.next_before_btn} onClick={() => setPage((currentPage > 1 ? currentPage - 1: currentPage))}>{"<"}</li>
                {pageRange.map((pag) => <li onClick={() => setPage(pag)} className={pag === currentPage ? classes.current_page : null} >{pag}</li>)}
                <li className={classes.next_before_btn} onClick={() => setPage((currentPage < totalPages ? currentPage + 1: currentPage))} >{">"}</li>
            </ul>
        </div>
    );

}

Pagination.defaultProps = {
    pageNumber: 1,
    totalItens: 100,
    perPage: 1,
    maxPages: 6,
    onPageChange: () => {}
}

Pagination.propTypes = {
    pageNumber: PropTypes.number,
    totalPages: PropTypes.number,
    maxPages: PropTypes.number,
    onPageChange: PropTypes.func

}

export default Pagination;
