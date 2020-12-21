import axios from 'axios';
export const BUSINESSINFOCARD_UPLOAD_REQUEST = "BUSINESSINFOCARD_UPLOAD_REQUEST";
export const BUSINESSINFOCARD_UPLOAD_SUCCESS = "BUSINESSINFOCARD_UPLOAD_SUCCESS";
export const BUSINESSINFOCARD_UPLOAD_FAIL = "BUSINESSINFOCARD_UPLOAD_FAIL";



const businessupload = (photofile, importantid) => async (dispatch) => {
    dispatch({ type: BUSINESSINFOCARD_UPLOAD_REQUEST, payload: { photofile, importantid } });
    try {
        const { data } = await axios.post('http://localhost:5000/api/businessphotoedit',
            { photo: photofile, id: importantid });
        dispatch({ type: BUSINESSINFOCARD_UPLOAD_SUCCESS, payload: data });
        // localStorage
    } catch (error) {
        dispatch({ type: BUSINESSINFOCARD_UPLOAD_FAIL, payload: error });
    };
};

export { businessupload };