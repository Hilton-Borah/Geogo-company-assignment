import * as types from "./actiontypes"

const intialState = {
    allMovie: [],
    allMovieSearch: [],
    isLoading: false,
    isError: false,
    movieDetails: {},
}

export const Appreducer = (state = intialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.GET_ALL_MOVIE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_ALL_MOVIE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                allMovie: payload,
                isError: false
            }
        case types.GET_ALL_MOVIE_FAILURE:
            return {
                ...state,
                isLoading: false,
                allMovie: [],
                isError: true
            }

        // case types.GET_ALL_MOVIE_SEARCH_REQUEST:
        //     return {
        //         ...state,
        //         isLoading: true
        //     }
        // case types.GET_ALL_MOVIE_SEARCH_SUCCESS:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         allMovieSearch: payload,
        //         isError: false
        //     }
        // case types.GET_ALL_MOVIE_SEARCH_FAILURE:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         allMovieSearch: [],
        //         isError: true
        //     }

        case types.GET_ALL_MOVIEDETAILS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_ALL_MOVIEDETAILS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                movieDetails: payload,
                isError: false
            }
        case types.GET_ALL_MOVIEDETAILS_FAILURE:
            return {
                ...state,
                isLoading: false,
                movieDetails: {},
                isError: true
            }

        default:
            return state
    }
}