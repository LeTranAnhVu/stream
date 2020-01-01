import {FETCH_STREAMS} from "../actions/types";
const INITIAL_STATE = {
    streams: []
};

export const streamsReducer = (streams = INITIAL_STATE.streams, action) => {
    switch (action.type) {
        case FETCH_STREAMS : {
            return action.payload;
        }
        default: {
            return streams;
        }

    }
};

