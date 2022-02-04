import React from 'react';



const Pagination = ({paginate,output,currentPage,cardPerPage}) => {
    console.log(output)
    
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(output.length / cardPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <ul className = "pagination">
                <li className = "page-item">
                    <a  onClick={() => paginate(currentPage - 1)} href = "#" className='page-btn'>
                        Prev
                    </a>
                </li>
            {pageNumbers.slice(0,3).map(number => (
                <li key = {number} className = "page-item">
                    <a  onClick={() => paginate(number)} href = "#" className={`page-btn ${number === currentPage && 'active-btn'}`}>
                        {number}
                    </a>
                </li>
            ))}
                <li className = {pageNumbers.length > 6 ? "page-item" : "hidden"}>
                    ...
                </li>
                {pageNumbers.slice(pageNumbers.length-3,pageNumbers.length).map(number => (
                    <li key = {number} className = {pageNumbers.length > 6 ? "page-item" : "hidden"}>
                        <a  onClick={() => paginate(number)} href = "#" className={`page-btn ${number === currentPage && 'active-btn'}`}>
                            {number}
                        </a>
                    </li>
                ))}
                <li className = "page-item">
                    <a  onClick={() => paginate(currentPage + 1)} href = "#" className='page-btn'>
                     Next
                     </a>
                </li>
        </ul>
    )
}

export default Pagination;
