import * as actionTypes from "../actions/ActionTypes";
import { updateObject } from "../utility";

const initialState = {
    results: [],
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(
        (result) => result.id !== action.resultElID
    );
    return updateObject(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RSLT:
            return updateObject(state, {
                results: state.results.concat({
                    id: new Date(),
                    value: action.result * 2,
                }),
            });

        case actionTypes.DELETE_RSLT:
            return deleteResult(state, action);
        default:
            return state;
    }
};

export default reducer;
