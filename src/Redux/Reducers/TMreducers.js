import {
    USERINFOCARD_UPLOAD_FAIL,
    USERINFOCARD_UPLOAD_SUCCESS,
    USERINFOCARD_UPLOAD_REQUEST
} from "../Actions/TMactions"


function userInfoUploadReducer(state = {}, action) {
    switch (action.type) {
        case USERINFOCARD_UPLOAD_REQUEST:
            return { loading: true };
        case USERINFOCARD_UPLOAD_SUCCESS:
            return { loading: false, success: true, uploadedObject: action.payload, };
        case USERINFOCARD_UPLOAD_FAIL:
            return { loading: false, sucess: false, error: action.payload, };
        default:
            return state;
    };
};

export { userInfoUploadReducer }