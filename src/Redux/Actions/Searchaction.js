import axios from 'axios';
export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAIL = "SEARCH_FAIL";


const search = (searchlink) => async (dispatch) => {
    dispatch({ type: SEARCH_REQUEST, payload: { searchlink } });
    try {
        const { searchdata } = await axios.get(`${searchlink}`);
        dispatch({ type: SEARCH_SUCCESS, payload: searchdata });
        // localStorage
    } catch (error) {
        dispatch({ type: SEARCH_FAIL, payload: error });
    }
};

export { search };