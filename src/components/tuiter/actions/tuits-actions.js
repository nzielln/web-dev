import * as service from "../service/tuit-service";

export const CREATE_TUIT = "CREATE_TUIT";
export const DELETE_TUIT = "DELETE_TUIT";
export const UPDATE_TUIT = "UPDATE_TUIT";
export const FIND_ALL_TUITS = "FIND_ALL_TUITS";

export const createTuit = async (dispatch, new_tuit) => {
    const tuit = await service.createTuits(new_tuit);
    dispatch({
        type: CREATE_TUIT,
        tuit
    });
};

export const deleteTuit = async (dispatch, tuit) => {
    const response = await service.deleteTuits(tuit);
    dispatch({
        type: DELETE_TUIT,
        tuit
    });

};

export const updateTuits = async (dispatch, tuit) => {
    const status = await service.updateTuits(tuit);

    dispatch({
        type: UPDATE_TUIT,
        tuit
    });
};

export const findAllTuits = async (dispatch) => {
    const tuits = await service.findAllTuits();
    dispatch({
        type: FIND_ALL_TUITS,
        tuits: tuits
    });
};