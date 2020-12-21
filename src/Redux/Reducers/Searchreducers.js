import {
    SEARCH_FAIL,
    SEARCH_SUCCESS,
    SEARCH_REQUEST,
} from "../Actions/Searchaction"


function searchReducer(state = {}, action) {
    switch (action.type) {
        case SEARCH_REQUEST:
            return { loading: true };
        case SEARCH_SUCCESS:
            return { loading: false, success: true, searchdata: action.payload, };
        case SEARCH_FAIL:
            return { loading: false, sucess: false, error: action.payload, };
        default:
            return state;
    };
};

export { searchReducer }