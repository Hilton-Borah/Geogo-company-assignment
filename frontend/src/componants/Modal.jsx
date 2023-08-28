
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx"
import { editData, getAllDataDetails } from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
    "Title": "",
    "Year": "",
    "Released": "",
    "Runtime": "",
    "Genre": "",
    "Director": "",
    "Writer": "",
    "Actors": "",
    "Plot": "",
    "Language": "",
    "Country": "",
    "Awards": "",
    "Poster": "",
    "imdbRating": "",
    "Production": ""
}


export default function Modal({showModal,setShowModal,id}) {
  
    const [text, setText] = useState(initialState);

    const dispatch = useDispatch();
    const { isLoading, isError, movieDetails,moviesPost } = useSelector((state) => {
        return {
            isLoading: state.Appreducer.isLoading,
            idError: state.Appreducer.idError,
            movieDetails: state.Appreducer.movieDetails,
            moviesPost:state.Appreducer.moviesPost
        }
    })


    const { Title, Year, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Poster, imdbRating, Production } = text;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setText({ ...text, [name]: value })
    }




    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editData(id))

        if (isError===false){
            setShowModal(false)
        }
    }

    useEffect(() => {
        dispatch(getAllDataDetails(id))
    }, [])

    console.log(moviesPost)

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 pb-2 border-b border-solid border-slate-200 rounded-t mb-3">
                                    <h3 className="text-3xl font-semibold">
                                        Edit your Movie
                                    </h3>
                                    <button
                                        className="p-1 ml-auto border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="text-black">
                                            <RxCross2 />
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}

                                {
                                    movieDetails && movieDetails.message &&  <div className='border-r lg:w-full md:full lg:shrink-0'>
                                    <input className='w-4/5  h-8 rounded-md outline-0 mb-2' placeholder='Enter title*' value={movieDetails.message.Title} name='Title' onChange={handleChange} type="text" required /><br />
                                    <textarea className='w-4/5 rounded-md outline-0 mb-1' placeholder='Enter description*' value={movieDetails.message.Plot} name='Plot' onChange={handleChange} type="text" required /><br />

                                    <div className='w-4/5 lg:w-4/5 sm:w-4/5 flex md:justify-between md:items-center  gap-5 mx-auto'>
                                        <input className='w-4/5  h-8 md:w-1/2 lg:w-1/2 rounded-md outline-0 mb-2 md:mb-2 ml-5' placeholder='Enter rating*' value={movieDetails.message.imdbRating} name='imdbRating' type="number" onChange={handleChange} required /><br />
                                        <input className='w-4/5  h-8 md:w-1/2 lg:w-1/2 rounded-md outline-0 mb-2 md:mb-2' placeholder='Enter duration*' value={movieDetails.message.Runtime} name='Runtime' onChange={handleChange} type="text" required /><br />
                                    </div>

                                    <div className='w-4/5 lg:w-4/5  md:w-4/5 flex md:justify-between md:items-center  gap-5 mx-auto '>
                                        <input className='w-4/5 h-8 md:w-1/2 lg:w-1/2 rounded-md outline-0 mb-2 md:mb-2 ml-5' placeholder='Enter country*' value={movieDetails.message.Country} name='Country' type="text" onChange={handleChange} required /><br />
                                        <input className='w-4/5 h-8 md:w-1/2 lg:w-1/2 rounded-md outline-0 mb-2 md:mb-2' placeholder='Enter release year' value={movieDetails.message.Year} name='Year' onChange={handleChange} type="number" required /><br />
                                    </div>

                                    <div className='w-4/5 lg:w-4/5 md:w-4/5 flex md:justify-between md:items-center  gap-5 mx-auto'>
                                        {/* <div className='flex justify-between items-center gap-5 m-auto'> */}
                                        <input className='w-4/5  h-8 md:w-1/2 lg:w-1/2 rounded-md outline-0 mb-2 md:mb-2 ml-5' placeholder='Enter released date*' value={movieDetails.message.Released} onChange={handleChange} name='Released' type="text" required /><br />
                                        {/* </div> */}
                                        <input className='w-4/5  h-8 md:w-1/2 lg:w-1/2 rounded-md outline-0 mb-2 md:mb-2' placeholder='Enter language*' value={movieDetails.message.Language} name='Language' type="text" onChange={handleChange} required /><br />
                                    </div>

                                    <input className='w-4/5 h-8 rounded-md outline-0 mb-2' placeholder='Enter cast name*' value={movieDetails.message.Actors} onChange={handleChange} name="Actors" type="text" required /><br />
                                    <input className='w-4/5 h-8 rounded-md outline-0 mb-2' placeholder='Enter director*' value={movieDetails.message.Director} onChange={handleChange} name='Director' type="text" required /><br />
                                    <input className='w-4/5 h-8 rounded-md outline-0 mb-2' placeholder='Enter awards*' value={movieDetails.message.Awards} name='Awards' onChange={handleChange} type="text" required /><br />
                                    <input className='w-4/5 h-8 rounded-md outline-0 mb-2' placeholder='Enter genre (eg. action, drama etc)*' value={movieDetails.message.Genre} name='Genre' onChange={handleChange} type="text" required /><br />
                                    <input className='w-4/5 h-8 rounded-md outline-0 mb-2' placeholder='Enter production company*' value={movieDetails.message.Production} name='Production' onChange={handleChange} type="text" required /><br />
                                    <input className='w-4/5 h-8 rounded-md outline-0 mb-2' placeholder='Enter writer name*' name='Writer' value={movieDetails.message.Writer} type="text" onChange={handleChange} required /><br />
                                    <input className='w-4/5 h-8 rounded-md outline-0 mb-2' placeholder='Enter poster link*'  name='Poster' value={movieDetails.message.Poster} type="text" onChange={handleChange} required /><br />
                                    {/* <button type="submit" className='p-2 pl-8 pr-8 bg-blue rounded-md text-white hover:bg-white hover:text-blue hover:border-2 border-blue font-semibold'>+ Add movie</button> */}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            type="button" className='p-2 pl-8 pr-8 bg-blue rounded-md text-white hover:bg-white hover:text-blue hover:border-2 border-2 border-blue font-semibold'
                                            onClick={handleSubmit}
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                                }
                                {/*footer*/}
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
