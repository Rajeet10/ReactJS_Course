import * as actionTypes from '../Action';

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
       
            default:
                return state;
        }
            
                
        
  
}


export default reducer;