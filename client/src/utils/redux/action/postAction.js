import {
    CREATE_POST,
} from "../actionTypes";
import * as api from "../api";

export const addPost = (formData, image) => async (dispatch) => {
    try {
        if (image) {
            const { data: photoUrl } = await api.uploadImage(image);
            console.log(photoUrl);
            formData.postPhoto = photoUrl.photoUrl;
            const { data } = await api.addPost(formData);
            console.log(data);
        } else {
            formData.postPhoto = "";
            const { data } = await api.addPost(formData);
            console.log(data);
        }
    } catch (e) {
        console.log(e);
    }
};


