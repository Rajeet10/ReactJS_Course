import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/Action';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
                default:
                    
                    break;
        }
    }

    render () { 
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={ this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onADDCounter}  />
                <CounterControl label="Subtract 10" clicked={ this.props.onSubCounter}  />
                <hr />
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>store result</button>
                <ul>
                    {this.props.storedResult.map(strResult=>(
                        <li key={strResult.id } onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}
const mapStateToProps=state=>{
    return {
        ctr:state.ctr.counter,
        storedResult:state.res.results
    };
}
const mapDispatchToProps=dispatch=>{
    return{
        onIncrementCounter:()=>dispatch({type:actionTypes.INCREMENT}),
        onDecrementCounter:()=>dispatch({type:actionTypes.DECREMENT}),
        onADDCounter:()=>dispatch({type:actionTypes.ADD,value:10}),
        onSubCounter:()=>dispatch({type:actionTypes.SUB,value:10}),
        onStoreResult:(result)=>dispatch({type:actionTypes.STORE_RSLT,result:result}),
        onDeleteResult:(id)=>dispatch({type:actionTypes.DELETE_RSLT,resultElID:id}),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);