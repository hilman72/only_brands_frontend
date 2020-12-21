import axios from "axios";

export const GET_MYREF_REQUEST = "GET_MYREF_REQUEST";
export const GET_MYREF_SUCCESS = "GET_MYREF_SUCCESS";
export const GET_MYREF_FAIL = "GET_MYREF_FAIL";

const getMyRef = (name) => async (dispatch) => {
  dispatch({ type: GET_MYREF_REQUEST, payload: { name } });
  try {
    const { data } = await axios.post("http://localhost:5000/api/yourRef/", {
      name: name,
    });
    dispatch({ type: GET_MYREF_SUCCESS, payload: data });
    // localStorage
  } catch (error) {
    dispatch({ type: GET_MYREF_FAIL, payload: error });
  }
};
export { getMyRef };
