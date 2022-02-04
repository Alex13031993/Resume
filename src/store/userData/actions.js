import * as types from "./types";

export const setUserData = ( value ) => ( {
    type: types.SET_USER_DATA,
    payload: value,
} );

export const setFetching = ( value ) => ( {
    type: types.SET_FETCHING,
    payload: value,
} );

export const setError = ( value ) => ( {
    type: types.SET_ERROR,
    payload: value,
} );
