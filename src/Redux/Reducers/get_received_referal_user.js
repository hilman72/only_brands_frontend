import {
  GET_RECEREF_USER_REQUEST,
  GET_RECEREF_USER_SUCCESS,
  GET_RECEREF_USER_FAIL,
} from "../Actions/get_received_referal_user";

function getReceRefReducer(state = {}, action) {
  switch (action.type) {
    case GET_RECEREF_USER_REQUEST:
      return { loading1: true };
    case GET_RECEREF_USER_SUCCESS:
      return {
        loading1: false,
        success1: true,
        uploadedObject1: action.payload,
      };
    case GET_RECEREF_USER_FAIL:
      return { loading1: false, sucess1: false, error1: action.payload };
    default:
      return state;
  }
}

export { getReceRefReducer };
