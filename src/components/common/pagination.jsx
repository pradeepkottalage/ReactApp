import React, { Component } from 'react';
import _ from 'lodash'
class Pagination extends Component {
    
    render() { 
        const pageCount = Math.ceil(this.props.itemsCount/this.props.pageSize)
        const pages =  _.range(1,pageCount+1);
        const currentPage = this.props.currentPage;
        if(pageCount === 1 )
        return null;
        return ( 
        <nav aria-label="Page navigation example">
            <ul className="pagination">
               { 
                   pages.map((page)=>(
                <li className={currentPage == page ? 'page-item active': 'page-item'} key={page} ><a onClick={()=>this.props.onPageClick(page)} className="page-link" >{page}</a></li>))
                }
            </ul>
      </nav> );
    }
}
 
export default Pagination;