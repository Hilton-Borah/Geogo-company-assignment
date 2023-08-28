import * as types from "./actiontypes"

const intialState = {
    allMovie: [],
    allMovieSearch: [],
    isLoading: false,
    isError: false,
    movieDetails: {},
    moviesPost: {},
    wishlist: []
}

export const Appreducer = (state = intialState, action) => {
    const { type, payload } = action;
    // console.log(payload)
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

            // post all movie ---------------------

        case types.POST_ALL_MOVIE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.POST_ALL_MOVIE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                moviesPost: payload,
                isError: false
            }
        case types.POST_ALL_MOVIE_FAILURE:
            return {
                ...state,
                isLoading: false,
                moviesPost: [],
                isError: true
            }


            // delete-------------------------

        case types.DELETE_ALL_MOVIE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.DELETE_ALL_MOVIE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                moviesPost: payload,
                isError: false
            }
        case types.DELETE_ALL_MOVIE_FAILURE:
            return {
                ...state,
                isLoading: false,
                moviesPost: {},
                isError: true
            }


            // edit movie --------------------------------

        case types.EDIT_ALL_MOVIE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.EDIT_ALL_MOVIE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                moviesPost: payload,
                isError: false
            }
        case types.EDIT_ALL_MOVIE_FAILURE:
            return {
                ...state,
                isLoading: false,
                moviesPost: {},
                isError: true
            }


            // get movie details ------------------------

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


            // get  all movie search -----------------------------

        case types.GET_ALL_MOVIE_SEARCH_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_ALL_MOVIE_SEARCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                allMovieSearch: payload,
                isError: false
            }
        case types.GET_ALL_MOVIE_SEARCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                allMovieSearch: [],
                isError: true
            }






        // wishlist -------------------------------


        case types.POST_MOVIE_WISHLIST_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.POST_MOVIE_WISHLIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                wishlist: payload,
                isError: false
            }
        case types.POST_ALL_MOVIE_FAILURE:
            return {
                ...state,
                isLoading: false,
                wishlist: [],
                isError: true
            }


        case types.GET_MOVIE_WISHLIST_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_MOVIE_WISHLIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                wishlist: payload,
                isError: false
            }
        case types.GET_MOVIE_WISHLIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                wishlist: [],
                isError: true
            }


        case types.DELETE_ALL_MOVIE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.DELETE_ALL_MOVIE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                wishlist: payload,
                isError: false
            }
        case types.DELETE_ALL_MOVIE_FAILURE:
            return {
                ...state,
                isLoading: false,
                wishlist: [],
                isError: true
            }

        default:
            return state
    }
}