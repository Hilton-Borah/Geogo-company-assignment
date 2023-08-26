import * as types from "./actiontypes"

const intialState = {
    allMovie: [],
    isLoading: false,
    isError: false
}

export const Authreducer = (state = intialState, action) => {
    const { type, payload } = action;
    switch (type) {
        // case types.GET_ALL_MOVIE_REQUEST:
        //     return {
        //         ...state,
        //         isLoading: true
        //     }
        // case types.GET_ALL_MOVIE_SUCCESS:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         allMovie: payload,
        //         isError: false
        //     }
        // case types.GET_ALL_MOVIE_SUCCESS:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         allMovie: [],
        //         isError: true
        //     }

        default:
            return state
    }
}