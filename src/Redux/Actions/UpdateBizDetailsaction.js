import axios from 'axios';
export const BIZDETAILS_UPLOAD_REQUEST = "BIZDETAILS_UPLOAD_REQUEST";
export const BIZDETAILS_UPLOAD_SUCCESS = "BIZDETAILS_UPLOAD_SUCCESS";
export const BIZDETAILS_UPLOAD_FAIL = "BIZDETAILS_UPLOAD_FAIL";



const bizDetailsupload = (description, category, business) => async (dispatch) => {
    dispatch({ type: BIZDETAILS_UPLOAD_REQUEST, payload: { description, category, business } });
    try {
        const { data } = await axios.post('http://localhost:5000/api/bizdetailsupload',
            { description: description, business: business });
        dispatch({ type: BIZDETAILS_UPLOAD_SUCCESS, payload: data });
        // localStorage
    } catch (error) {
        dispatch({ type: BIZDETAILS_UPLOAD_FAIL, payload: error });
    };
};

export { bizDetailsupload };