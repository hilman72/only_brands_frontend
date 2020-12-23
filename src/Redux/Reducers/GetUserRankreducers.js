import {
    USER_RANK_REQUEST,
    USER_RANK_SUCCESS,
    USER_RANK_FAIL,
} from "../Actions/GetUserRankaction";

function getUserRankReducer(state = {}, action) {
    switch (action.type) {
        case USER_RANK_REQUEST:
            return { loading: true };
        case USER_RANK_SUCCESS:
            return { loading: false, success: true, uploadedObject: action.payload };
        case USER_RANK_FAIL:
            return { loading: false, sucess: false, error: action.payload };
        default:
            return state;
    }
}

export { getUserRankReducer };