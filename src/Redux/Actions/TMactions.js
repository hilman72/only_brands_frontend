import axios from "axios";
export const USERINFOCARD_UPLOAD_REQUEST = "USERINFOCARD_UPLOAD_REQUEST";
export const USERINFOCARD_UPLOAD_SUCCESS = "USERINFOCARD_UPLOAD_SUCCESS";
export const USERINFOCARD_UPLOAD_FAIL = "USERINFOCARD_UPLOAD_FAIL";



const upload = (name, photofile, importantid) => async (dispatch) => {
    dispatch({ type: USERINFOCARD_UPLOAD_REQUEST, payload: { name, photofile, importantid } });
    try {
        const { data } = await axios.post('http://localhost:5000/edit', { name: name, photo: photofile, id: importantid });
        dispatch({ type: USERINFOCARD_UPLOAD_SUCCESS, payload: data });
        // localStorage
    } catch (error) {
        dispatch({ type: USERINFOCARD_UPLOAD_FAIL, payload: error });
    };
};

export { upload };