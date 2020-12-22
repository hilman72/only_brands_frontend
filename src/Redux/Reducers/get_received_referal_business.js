import {
  GET_RECEREF_BUSINESS_REQUEST,
  GET_RECEREF_BUSINESS_SUCCESS,
  GET_RECEREF_BUSINESS_FAIL,
} from "../Actions/get_received_referal_business";

function getReceRefBusinessReducer(state = {}, action) {
  switch (action.type) {
    case GET_RECEREF_BUSINESS_REQUEST:
      return { loading1: true };
    case GET_RECEREF_BUSINESS_SUCCESS:
      return {
        loading1: false,
        success1: true,
        uploadedObject2: action.payload,
      };
    case GET_RECEREF_BUSINESS_FAIL:
      return { loading2: false, sucess2: false, error2: action.payload };
    default:
      return state;
  }
}

export { getReceRefBusinessReducer };
