import axios from 'axios';

export const USERINFODETAILS_UPLOAD_REQUEST = "USERINFODETAILS_UPLOAD_REQUEST";
export const USERINFODETAILS_UPLOAD_SUCCESS = "USERINFODETAILS_UPLOAD_SUCCESS";
export const USERINFODETAILS_UPLOAD_FAIL = "USERINFODETAILS_UPLOAD_FAIL";




const uploaddetails = (category, description, importantid) => async (dispatch) => {
    console.log(category, description, importantid)
    dispatch({ type: USERINFODETAILS_UPLOAD_REQUEST, payload: { category, description, importantid } });
    try {
        const { data } = await axios.post('http://localhost:5000/editdetails',
            { category: category, description: description, id: importantid });
        dispatch({ type: USERINFODETAILS_UPLOAD_SUCCESS, payload: data });
        // localStorage
    } catch (error) {
        dispatch({ type: USERINFODETAILS_UPLOAD_FAIL, payload: error });
    };
};

export { uploaddetails }