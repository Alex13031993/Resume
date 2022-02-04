import * as types from "./types";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    const copyState = {...state}
    switch(action.type) {
        case types.SET_USER_DATA: return {...copyState, userData:action.payload};
        case types.SET_FETCHING: return {...copyState, fetching:action.payload};
        case types.SET_ERROR: return {...copyState, error:action.payload};
        default: return state;
    }
}

export default reducer;