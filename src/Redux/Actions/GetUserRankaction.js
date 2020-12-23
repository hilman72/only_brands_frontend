import axios from 'axios';
export const USER_RANK_REQUEST = "USER_RANK_REQUEST";
export const USER_RANK_SUCCESS = "USER_RANK_SUCCESS";
export const USER_RANK_FAIL = "USER_RANK_FAIL";


const user_rank = (business, userid) => async (dispatch) => {
    dispatch({ type: USER_RANK_REQUEST, payload: { business, userid } });
    try {
        const { data: userRankdata } = await axios.get(`http://localhost:5000/user_rank/${userid}/${business}`);
        dispatch({ type: USER_RANK_SUCCESS, payload: userRankdata });

        // localStorage
    } catch (error) {
        dispatch({ type: USER_RANK_FAIL, payload: error });
    }
};

export { user_rank };