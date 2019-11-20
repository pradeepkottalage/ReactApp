import React, { Component } from 'react';
class Counter extends Component {
    // state = {
    //     count:this.props.counter.value,
    //     address:{
    //         street:"1st crosss"
    //     },
    //     tags:["tag1","tag2"]
    //   }
    render() { 
       
        return (
        <react-fragment>
        <div>
            <span className={this.getBadgeClass()}>{this.formatCount()}</span>
            <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2 btn-sm">Delete</button>
        </div>
        </react-fragment>  );
    }
    formatCount =()=>{
      return this.props.counter.value === 0 ? 'Zero': this.props.counter.value;
    }

    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }
    // incrementCount = ()=>{
    //             this.setState({count: this.state.count+1});
    // }
}
 
export default Counter;