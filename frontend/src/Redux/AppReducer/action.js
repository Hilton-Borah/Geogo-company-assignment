import axios from "axios";
import * as types from "./actiontypes";

export const getAllData=(page,limit) => (dispatch) =>{
    dispatch({type:types.GET_ALL_MOVIE_REQUEST});
    return axios.get(`http://localhost:4500/movie?page=${page}&limit=${limit}`)
    .then((res)=>{
        // console.log(res.data.allMovie)
        dispatch({type:types.GET_ALL_MOVIE_SUCCESS,payload:res.data.allMovie})
    })
    .catch((err)=>{
        dispatch({type:types.GET_ALL_MOVIE_FAILURE})
    })
}

export const getAllDataDetails =(id)=> (dispatch) =>{
    dispatch({type:types.GET_ALL_MOVIEDETAILS_REQUEST});
    return axios.get(`http://localhost:4500/movie/${id}`)
    .then((res)=>{
        // console.log(res.data)
        dispatch({type:types.GET_ALL_MOVIEDETAILS_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:types.GET_ALL_MOVIEDETAILS_FAILURE})
    })
}

export const postAllData =(data)=> (dispatch) =>{
    dispatch({type:types.POST_ALL_MOVIE_REQUEST});
    return axios.post(`http://localhost:4500/movie/add/`,data)
    .then((res)=>{
        // console.log(res.data)
        dispatch({type:types.POST_ALL_MOVIE_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        // console.log(err)
        dispatch({type:types.POST_ALL_MOVIE_FAILURE})
    })
}


export const deleteData =(id)=> (dispatch) =>{
    dispatch({type:types.DELETE_ALL_MOVIE_REQUEST});
    return axios.delete(`http://localhost:4500/movie/delete/${id}`)
    .then((res)=>{
        // console.log(res.data)
        dispatch({type:types.DELETE_ALL_MOVIE_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        // console.log(err)
        dispatch({type:types.DELETE_ALL_MOVIE_FAILURE})
    })
}

export const editData =(id)=> (dispatch) =>{
    dispatch({type:types.EDIT_ALL_MOVIE_REQUEST});
    return axios.patch(`http://localhost:4500/movie/update/${id}`)
    .then((res)=>{
        // console.log(res.data)
        dispatch({type:types.EDIT_ALL_MOVIE_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        // console.log(err)
        dispatch({type:types.EDIT_ALL_MOVIE_FAILURE})
    })
}

// export const getAllSearchData =(query)=> (dispatch) =>{
//     dispatch({type:types.GET_ALL_MOVIE_SEARCH_REQUEST});
//     return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e4647b933575d419ceb5fef345794dac&query=${query}`)
//     .then((res)=>{
//         // console.log(query,res.data.results)
//         dispatch({type:types.GET_ALL_MOVIE_SEARCH_SUCCESS,payload:res.data.results})
//     })
//     .catch((err)=>{
//         dispatch({type:types.GET_ALL_MOVIE_SEARCH_FAILURE})
//     })
// }

// {"adult":false,"backdrop_path":"/sw7mordbZxgITU877yTpZCud90M.jpg","genre_ids":[18,80],"id":769,"original_language":"en","original_title":"GoodFellas","overview":"The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.","popularity":45.753,"poster_path":"/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg","release_date":"1990-09-12","title":"GoodFellas","video":false,"vote_average":8.5,"vote_count":11081}