import axios from "axios";

export const GET_RECEREF_BUSINESS_REQUEST = "GET_RECEREF_BUSINESS_REQUEST";
export const GET_RECEREF_BUSINESS_SUCCESS = "GET_RECEREF_BUSINESS_SUCCESS";
export const GET_RECEREF_BUSINESS_FAIL = "GET_RECEREF_BUSINESS_FAIL";

const getReceMyRefBusiness = (name) => async (dispatch) => {
  dispatch({ type: GET_RECEREF_BUSINESS_REQUEST, payload: { name } });
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/getReceivedRefBusiness/",
      {
        name: name,
      }
    );
    dispatch({ type: GET_RECEREF_BUSINESS_SUCCESS, payload: data });
    // localStorage
  } catch (error) {
    dispatch({ type: GET_RECEREF_BUSINESS_FAIL, payload: error });
  }
};
export { getReceMyRefBusiness };
