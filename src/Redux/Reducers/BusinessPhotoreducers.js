import {
    BUSINESSINFOCARD_UPLOAD_REQUEST,
    BUSINESSINFOCARD_UPLOAD_SUCCESS,
    BUSINESSINFOCARD_UPLOAD_FAIL
} from "../Actions/BusinessPhotoaction"


function businessInfoUploadReducer(state = {}, action) {
    switch (action.type) {
        case BUSINESSINFOCARD_UPLOAD_REQUEST:
            return { loading: true };
        case BUSINESSINFOCARD_UPLOAD_SUCCESS:
            return { loading: false, success: true, uploadedObject: action.payload, };
        case BUSINESSINFOCARD_UPLOAD_FAIL:
            return { loading: false, sucess: false, error: action.payload, };
        default:
            return state;
    };
};

export { businessInfoUploadReducer }