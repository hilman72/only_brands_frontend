import axios from 'axios';

export const REVIEW_UPLOAD_REQUEST = "REVIEW_UPLOAD_REQUEST";
export const REIVEW_UPLOAD_SUCCESS = "REIVEW_UPLOAD_SUCCESS";
export const REVIEW_UPLOAD_FAIL = "REVIEW_UPLOAD_FAIL";

const uploadreview = (businessid, reviewdetail, importantid) => async (dispatch) => {
    console.log(businessid, reviewdetail, importantid)
    dispatch({ type: REVIEW_UPLOAD_REQUEST, payload: { businessid, reviewdetail, importantid } });
    try {
        const { reviewdata } = await axios.post('http://localhost:5000/api/reviewdetails',
            { businessid: businessid, reviewdetail: reviewdetail, userid: importantid });
        dispatch({ type: REIVEW_UPLOAD_SUCCESS, payload: reviewdata });
        // localStorage
    } catch (error) {
        dispatch({ type: REVIEW_UPLOAD_FAIL, payload: error });
    };
};

export { uploadreview };