import {
  GET_COUPON_REQUEST,
  GET_COUPON_SUCCESS,
  GET_COUPON_FAIL,
} from "../Actions/couponfordisplay.js";

function getDisplayCouponReducer(state = {}, action) {
  switch (action.type) {
    case GET_COUPON_REQUEST:
      return { loading: true };
    case GET_COUPON_SUCCESS:
      return {
        loading: false,
        success: true,
        uploadedObject: action.payload,
      };
    case GET_COUPON_FAIL:
      return { loading: false, sucess: false, error: action.payload };
    default:
      return state;
  }
}

export { getDisplayCouponReducer };
