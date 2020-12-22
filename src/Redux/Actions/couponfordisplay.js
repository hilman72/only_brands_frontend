import axios from "axios";

export const GET_COUPON_REQUEST = "GET_COUPON_REQUEST";
export const GET_COUPON_SUCCESS = "GET_COUPON_SUCCESS";
export const GET_COUPON_FAIL = "GET_COUPON_FAIL";

const getDisplayCoupon = (name) => async (dispatch) => {
  dispatch({ type: GET_COUPON_REQUEST, payload: { name } });
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/displayCoupon/"
    );
    dispatch({ type: GET_COUPON_SUCCESS, payload: data });
    // localStorage
  } catch (error) {
    dispatch({ type: GET_COUPON_FAIL, payload: error });
  }
};
export { getDisplayCoupon };
