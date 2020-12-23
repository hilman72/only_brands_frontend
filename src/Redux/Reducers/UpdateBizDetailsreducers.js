import {
    BIZDETAILS_UPLOAD_REQUEST,
    BIZDETAILS_UPLOAD_SUCCESS,
    BIZDETAILS_UPLOAD_FAIL
} from "../Actions/UpdateBizDetailsaction"


function bizdetailsReducer(state = {}, action) {
    switch (action.type) {
        case BIZDETAILS_UPLOAD_REQUEST:
            return { loading: true };
        case BIZDETAILS_UPLOAD_SUCCESS:
            return { loading: false, success: true, bizObject: action.payload, };
        case BIZDETAILS_UPLOAD_FAIL:
            return { loading: false, sucess: false, error: action.payload, };
        default:
            return state;
    };
};

export { bizdetailsReducer }