import React, { Component } from 'react';
import http from '../services/httpService'
import EndPoint from '../config.json'
import Pagination from './common/pagination';
import {Paginate} from '../utils/paginate'
class Customers extends Component {
    state = { 
        posts:[],
        currentPage:1,
        pageSize:10
     }
    async componentDidMount(){
    const {data: post} = await http.get(EndPoint.apiEndPoint)
    this.setState({posts:post})
    }
    handlePage = (data)=>{
      this.setState({currentPage:data})
     
    }
    render() { 
        const {posts,currentPage,pageSize} = this.state;

        const data = Paginate(posts,currentPage,pageSize)
       
        return (<div><table className="table table-dark"><thead><tr>
      <th>#</th>
      <th>Title</th>
      <th>userId</th>
      <th>Body</th>
    </tr>
  </thead>
  <tbody>{ data.map((p)=><tr key={p.id}>
          <td>{p.id}</td>
          <td>{p.title}</td>
          <td>{p.userId}</td>
          <td>{p.body}</td>
          </tr>)}</tbody>
</table>
<Pagination pageSize={this.state.pageSize} itemsCount={posts.length} currentPage={this.state.currentPage} onPageClick={this.handlePage}></Pagination>
        </div> );
    }
}
 
export default Customers;