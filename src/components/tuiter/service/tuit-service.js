import axios from "axios";

const TUITS_API = "http://localhost:4000/api/tuits";

export const createTuits = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit);
    return response.data;
};

export const deleteTuits = async (tuit) => {
    const response = await axios
        .delete(`${TUITS_API}/${tuit._id}`);
    return response.data;
};

export const updateTuits = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return response.data;
};

export const findAllTuits = async () => {
    const response = await axios.get(TUITS_API);
    return response.data;
};