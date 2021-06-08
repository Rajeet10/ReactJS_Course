import * as actionTypes from '../Action';

const initialState = {
    results:[]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      
        case actionTypes.STORE_RSLT:
            return{
                ...state,
                results:state.results.concat({id:new Date(),value:action.result})  //push is mutable so use concat for immutable

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