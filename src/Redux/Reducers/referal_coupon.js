import {
  GET_MYREF_REQUEST,
  GET_MYREF_SUCCESS,
  GET_MYREF_FAIL,
} from "../Actions/referal_coupon";

function getRefReducer(state = {}, action) {
  switch (action.type) {
    case GET_MYREF_REQUEST:
      return { loading: true };
    case GET_MYREF_SUCCESS:
      return { loading: false, success: true, uploadedObject: action.payload };
    case GET_MYREF_FAIL:
      return { loading: false, sucess: false, error: action.payload };
    default:
      return state;
  }
}

export { getRefReducer };
