import axios from "axios";

export const GET_RECEREF_USER_REQUEST = "GET_RECEREF_USER_REQUEST";
export const GET_RECEREF_USER_SUCCESS = "GET_RECEREF_USER_SUCCESS";
export const GET_RECEREF_USER_FAIL = "GET_RECEREF_USER_FAIL";

const getReceMyRef = (name) => async (dispatch) => {
  dispatch({ type: GET_RECEREF_USER_REQUEST, payload: { name } });
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/getReceivedRef/",
      {
        name: name,
      }
    );
    dispatch({ type: GET_RECEREF_USER_SUCCESS, payload: data });
    // localStorage
  } catch (error) {
    dispatch({ type: GET_RECEREF_USER_FAIL, payload: error });
  }
};
export { getReceMyRef };
