import axios from "axios";
export const USER_OWNREIVEW_ON_BIS_REQUEST = "USER_OWNREIVEW_ON_BIS_REQUEST";
export const USER_OWNREIVEW_ON_BIS_SUCCESS = "USER_OWNREIVEW_ON_BIS_SUCCESS";
export const USER_OWNREIVEW_ON_BIS_FAIL = "USER_OWNREIVEW_ON_BIS_FAIL";



const displayuserownreviewonbiz = (businessname, importantid) => async (dispatch) => {
    dispatch({ type: USER_OWNREIVEW_ON_BIS_REQUEST, payload: { businessname, importantid } });
    try {
        console.log(businessname)
        const { data: reviewowndata } = await axios.get(`http://localhost:5000/api/getown/${businessname}/${importantid}`)
        dispatch({ type: USER_OWNREIVEW_ON_BIS_SUCCESS, payload: reviewowndata });
        // localStorage
    } catch (error) {
        dispatch({ type: USER_OWNREIVEW_ON_BIS_FAIL, payload: error });
    };
};

export { displayuserownreviewonbiz };