import {
    USERINFODETAILS_UPLOAD_REQUEST,
    USERINFODETAILS_UPLOAD_SUCCESS,
    USERINFODETAILS_UPLOAD_FAIL
} from '../Actions/EditNameactions'



function userInfoDetailsUploadReducer(state = {}, action) {
    switch (action.type) {
        case USERINFODETAILS_UPLOAD_REQUEST:
            return { loading: true };
        case USERINFODETAILS_UPLOAD_SUCCESS:
            return { loading: false, success: true, uploadedObject: action.payload, };
        case USERINFODETAILS_UPLOAD_FAIL:
            return { loading: false, sucess: false, error: action.payload, };
        default:
            return state;
    };
};

export { userInfoDetailsUploadReducer };