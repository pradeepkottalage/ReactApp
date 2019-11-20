import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {
    // state = { 
    //     counters:[
    //         {id:1, value:1},
    //         {id:2, value:4},
    //         {id:3, value:5},
    //         {id:4, value:6},
    //     ]
    //  }
    //  handleIncrement = (CounterData)=>{
    //    const cntr  = [...this.state.counters];
    //    const index = cntr.indexOf(CounterData);
    //    cntr[index] = {...CounterData}
    //    cntr[index].value++;
    //    this.setState({counters:cntr})
    //  }
    //  handleDelete = (counterID)=>{
    //     const counters = this.state.counters.filter((c)=>c.id !== counterID )
    //     this.setState({counters:counters})
    // }
    // handleReset = ()=>{
    //     const cntr  = [...this.state.counters];
    //     cntr.map((a)=>a.value = 0);
    //     this.setState({counters: cntr})
    // }
    render() { 
        
        return (<div>
           
                <button className="btn btn-primary m-2" onClick={this.props.onReset}>Reset</button>
           
            {
                this.props.counter.map((c)=>(
                                       
                        <Counter key={c.id} onIncrement={this.props.onIncrement} onDelete={this.props.onDelete} counter={c} >This is counter title</Counter>
                    ))
            }
        </div>  );
    }
}
 
export default Counters;