import {
    SIGN_IN,
    SIGN_OUT,
    FETCH_STREAMS,
    FETCH_STREAM,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from "./types";
import streamsApis from "../apis/streams";

import history from "../history";

export const signIn = userId => ({type: SIGN_IN, payload: userId});
export const signOut = () => ({type: SIGN_OUT});

export const fetchStreams = () => async (dispatch) => {
    const data = (await streamsApis.get('')).data;
    dispatch({type: FETCH_STREAMS, payload: data});
};

export const fetchStream = (id) => async (dispatch) => {
    const res = await streamsApis.get(`/${id}`);
    dispatch({type: FETCH_STREAM, payload: res.data});
};

export const createStream = (streamData) => async (dispatch, getState) => {
    const {userId} = getState().authState;
    const res = await streamsApis.post('', {...streamData, userId});
    dispatch({type: CREATE_STREAM, payload: res.data});
    history.push('/');
};

export const editStream = (id, steamData) => async (dispatch, getState) => {
    const res = await streamsApis.patch(`/${id}`, {...steamData});
    dispatch({type: EDIT_STREAM, payload: res.data});
    history.push('/');
};

export const deleteStream = (id) => async (dispatch) => {
    await streamsApis.delete(`/${id}`);
    dispatch({type: DELETE_STREAM, payload: id});
    history.push('/');
};