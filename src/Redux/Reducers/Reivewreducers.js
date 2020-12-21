import {
    REVIEW_UPLOAD_REQUEST,
    REIVEW_UPLOAD_SUCCESS,
    REVIEW_UPLOAD_FAIL
} from '../Actions/Reviewactions';



function reviewReducer(state = {}, action) {
    switch (action.type) {
        case REVIEW_UPLOAD_REQUEST:
            return { loading: true };
        case REIVEW_UPLOAD_SUCCESS:
            return { loading: false, success: true, uploadedObject: action.payload, };
        case REVIEW_UPLOAD_FAIL:
            return { loading: false, sucess: false, error: action.payload, };
        default:
            return state;
    };
};

export { reviewReducer };