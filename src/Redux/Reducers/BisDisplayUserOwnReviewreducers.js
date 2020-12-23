import {
    USER_OWNREIVEW_ON_BIS_REQUEST
    , USER_OWNREIVEW_ON_BIS_SUCCESS
    , USER_OWNREIVEW_ON_BIS_FAIL
} from '../Actions/BisDisplayUserOwnReviewaction'


function userGetOwnReviewFromBizReducer(state = {}, action) {
    switch (action.type) {
        case USER_OWNREIVEW_ON_BIS_REQUEST:
            return { loading: true };
        case USER_OWNREIVEW_ON_BIS_SUCCESS:
            return { loading: false, success: true, realuploadedObject: action.payload, };
        case USER_OWNREIVEW_ON_BIS_FAIL:
            return { loading: false, sucess: false, error: action.payload, };
        default:
            return state;
    };
};

export { userGetOwnReviewFromBizReducer }