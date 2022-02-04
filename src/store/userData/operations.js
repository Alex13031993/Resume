import * as actions from './actions'
import API from "../../api/API";

export const getUserData = () => async (dispatch) => {
    dispatch(actions.setFetching(true))
    try {
        const result = await API.getUserData();
        dispatch(actions.setUserData(result.data))
        dispatch(actions.setFetching(false))
    }
    catch(e) {
        dispatch(actions.setFetching(false))
        dispatch(actions.setError(e))
    }
}