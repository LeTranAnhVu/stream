import {SIGN_IN , SIGN_OUT, FETCH_STREAMS} from "./types";
import {streamApis} from "../apis";

export const signIn = userId =>  ({type: SIGN_IN, payload: userId});
export const signOut = () =>  ({type: SIGN_OUT});

export const fetchStream = () => {
    return async (dispatch) => {
        const data = (await streamApis.get()).data;
        console.log('after fetch', data);
        dispatch({type: FETCH_STREAMS , payload: data});
    }
};