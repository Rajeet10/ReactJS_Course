import * as actionTypes from './Action';

const initialState = {
    counter: 0,
    results:[]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState=Object.assign({},state);
            newState.counter=state.counter+1;
            return newState;
     
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }

        case actionTypes.SUB:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.STORE_RSLT:
            return{
                ...state,
                results:state.results.concat({id:new Date(),value:state.counter})  //push is mutable so use concat for immutable

            }
        case actionTypes.DELETE_RSLT:
            // const id=2;
            // const newArray=[...state.results];
            // newArray.results.splice(id,1)
            //filter return new array doesnt touch old one like spred
            const updatedArray=state.results.filter(result=>result.id !==action.resultElID);
            return{
                ...state,
                results:updatedArray
            }
            default:
                return state;
        }
            
                
        
  
}


export default reducer;