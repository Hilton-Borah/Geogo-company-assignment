import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, editData, getAllData, postAllData } from '../Redux/AppReducer/action';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"
import { Link, useSearchParams } from 'react-router-dom';
import Modal from '../componants/Modal';
import Footer from '../componants/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialState = {
  Title: "",
  Year: "",
  Released: "",
  Runtime: "",
  Genre: "",
  Director: "",
  Writer: "",
  Actors: "",
  Plot: "",
  Language: "",
  Country: "",
  Awards: "",
  Poster: "",
  imdbRating: "",
  Production: ""
}

const MovieControl = () => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState(initialState);
  const [searchparams, setSearchparams] = useSearchParams();
  const [filter,setFilter] = useState("");
  
  const [page, setPage] = useState(Number(searchparams.getAll("page")[0]) || 1)
  // console.log(searchparams.getAll("edit")[0])
  const [dis, setDis] = useState(false)
  const dispatch = useDispatch();
  const { isLoading, isError, allMovie,moviesPost } = useSelector((state) => {
    return {
      isLoading: state.Appreducer.isLoading,
      isError: state.Appreducer.isError,
      allMovie: state.Appreducer.allMovie,
      moviesPost:state.Appreducer.moviesPost
    }
  })

  const { Title, Year, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Poster, imdbRating, Production } = text;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value })
  }


  // submit post request --------------------

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postAllData(text))
    setTimeout(() => {
      toast.success('Movie added successfully');
      return dispatch(getAllData(page, 20,filter))
    }, 2000);
  }

  // delete data ----------------

  const handleDelete=(id)=>{
    dispatch(deleteData(id))
    dispatch(getAllData(page, 20,filter))
    setTimeout(() => {
      toast.success('Movie deleted successfully');
      return dispatch(getAllData(page, 20,filter))
    }, 2000);
  }


  // pesination-----------------

  const handlePagePrev = () => {
    if (page === 0) {
      setPage(1)
      setDis(true)
      setSearchparams({ page: page })
    } else {
      setPage(page - 1)
      setSearchparams({ page: page - 1 })
    }
  }

  const handlePageNext = () => {
    setPage(page + 1)
    setSearchparams({ page: page + 1 })
  }

  
  // modal code ----------------------
  
  // const [isModalOpen, setIsModalOpen] = useState(false);
  
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };
  
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  
  // edit code -------------- 
  
  const handleEdit=(id)=>{
    setShowModal(true)
    setSearchparams({ edit: id })
  }

  // main useEffcet------------------

  useEffect(() => {
    dispatch(getAllData(page, 20,filter))
  }, [page])

  return (
    <div>
      
      {/* form left side --------------------------- */}

    <div className='mt-36 w-11/12 border lg:flex justify-between m-auto pt-10 pb-10'>
      <form onSubmit={handleSubmit} className='border-r lg:w-2/5 md:full lg:shrink-0 mb-10'>
        <div className='w-4/5 text-start m-auto text-2xl font-bold'>
          <p>Add a Movie</p><br />
          <hr style={{ "marginTop": "-20px" }} className='border-2 m-auto mb-5' />
        </div>
        <input className='w-4/5 rounded-md outline-0 mb-5' placeholder='Enter title*' value={Title} name='Title' onChange={handleChange} type="text" required /><br />
        <textarea className='w-4/5 rounded-md outline-0 mb-3' placeholder='Enter description*' value={Plot} name='Plot' onChange={handleChange} type="text" required /><br />

        <div className='lg:w-4/5 md:w-4/5 md:flex md:justify-between md:items-center  gap-5 mx-auto'>
          <input className='w-4/5 md:w-1/2 lg:w-1/2 rounded-md outline-0 mb-5 md:mb-5 md:ml-5' placeholder='Enter rating*' value={imdbRating} name='imdbRating' type="number" onChange={handleChange} required /><br />
          <input className='w-4/5 md:w-1/2 lg:w-1/2 rounded-md outline-0 mb-5 md:mb-5' placeholder='Enter duration*' value={Runtime} name='Runtime' onChange={handleChange} type="text" required /><br />
        </div>

        <div className='lg:w-4/5 md:w-4/5 md:flex md:justify-between md:items-center  gap-5 mx-auto'>
          <input className='w-4/5 md:w-1/2 lg:w-1/2 rounded-md outline-0 mb-5 md:mb-5 md:ml-5' placeholder='Enter country*' value={Country} name='Country' type="text" onChange={handleChange} required /><br />
          <input className='w-4/5 md:w-1/2 lg:w-1/2 rounded-md outline-0 mb-5 md:mb-5' placeholder='Enter release year' value={Year} name='Year' onChange={handleChange} type="number" required /><br />
        </div>

        <div className='lg:w-4/5 md:w-4/5 md:flex md:justify-between md:items-center  gap-5 mx-auto'>
          {/* <div className='flex justify-between items-center gap-5 m-auto'> */}
          <input className='w-4/5 md:w-1/2 lg:w-1/2 rounded-md outline-0 mb-5 md:mb-5 md:ml-5' placeholder='Enter released date*' value={Released} onChange={handleChange} name='Released' type="text" required /><br />
          {/* </div> */}
          <input className='w-4/5 md:w-1/2 lg:w-1/2 rounded-md outline-0 mb-5 md:mb-5' placeholder='Enter language*' value={Language} name='Language' type="text" onChange={handleChange} required /><br />
        </div>

        <input className='w-4/5 rounded-md outline-0 mb-5' placeholder='Enter cast name*' value={Actors} onChange={handleChange} name="Actors" type="text" required /><br />
        <input className='w-4/5 rounded-md outline-0 mb-5' placeholder='Enter director*' value={Director} onChange={handleChange} name='Director' type="text" required /><br />
        <input className='w-4/5 rounded-md outline-0 mb-5' placeholder='Enter awards*' value={Awards} name='Awards' onChange={handleChange} type="text" required /><br />
        <input className='w-4/5 rounded-md outline-0 mb-5' placeholder='Enter genre (eg. action, drama etc)*' value={Genre} name='Genre' onChange={handleChange} type="text" required /><br />
        <input className='w-4/5 rounded-md outline-0 mb-5' placeholder='Enter production company*' value={Production} name='Production' onChange={handleChange} type="text" required /><br />
        <input className='w-4/5 rounded-md outline-0 mb-5' placeholder='Enter writer name*' value={Writer} name='Writer' type="text" onChange={handleChange} required /><br />
        <input className='w-4/5 rounded-md outline-0 mb-5' placeholder='Enter poster link*' value={Poster} name='Poster' type="text" onChange={handleChange} required /><br />
        <button type="submit" className='p-2 pl-8 pr-8 bg-blue rounded-md text-white hover:bg-white hover:text-blue hover:border-2 border-blue font-semibold'>+ Add movie</button>
      </form>

    {/* movie list right side ---------------------------------- */}

      <div className='border-l lg:w-3/5 md:full'>
        <p className='w-11/12 text-start m-auto text-2xl font-bold mb-3'>Movie List</p>
        <hr className='w-11/12 border-2 m-auto mb-5' />
        <div className='w-11/12 m-auto'>
          {
            allMovie && allMovie.map((el) => {
              return (
                <div key={el.id} className='flex justfy-between items-center mt-2 pb-1 cursor-pointer border-b gap-5'>
                  <div className='w-4/5 flex justfy-between items-center gap-5'>

                    <IoIosArrowBack />
                    <Link to={`/${el.Title}/details/${el._id}`}><img className='w-5 h-5' src={el.Poster} alt="" /></Link>
                    <Link to={`/${el.Title}/details/${el._id}`}><p className='text-xs md:text-sm lg:text-md '>{el.Title}</p></Link>
                    <p className='hidden md:block'>{el.Year}</p>
                  </div>
                    <p className='md:hidden text-sm'>{el.Year}</p>
                  <div className='w-1/5 flex justfy-between items-center gap-1 lg:gap-3'>

                    <button onClick={()=>handleEdit(el._id)} className='flex justify-between items-center gap-1 rounded text-blue hover:bg-blue hover:text-white border-blue border-2 pl-2 pr-2 text-xs'>
                      <AiOutlineEdit />
                      <span className="hidden md:inline">Edit</span>
                    </button>
                    <button onClick={()=>handleDelete(el._id)} className='flex justify-between items-center gap-1 rounded text-red hover:bg-red hover:text-white border-red border-2 pl-2 pr-2 text-xs'>
                      <AiOutlineDelete />
                      <span className="hidden md:inline">Delete</span>
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className='w-3/5 flex justify-center items-center m-auto gap-5 mt-10'>
          {
            page === 1 ? null : <button onClick={handlePagePrev} className='p-1 pl-8 pr-8 bg-blue rounded-md text-white hover:bg-white hover:text-blue hover:border-2 border-blue font-semibold'>Prev</button>
          }
          <p className='text-black flex justify-center items-center gap-3'><IoIosArrowBack /> {page} <IoIosArrowForward /></p>
          <button disabled={allMovie.length < 20} onClick={handlePageNext} className='p-1 pl-8 pr-8 bg-blue rounded-md text-white hover:bg-white hover:text-blue hover:border-2 border-blue font-semibold'>Next</button>
        </div>
      </div>
    </div>

    <Modal showModal={showModal} setShowModal={setShowModal} id={searchparams.getAll("edit")[0]}/>
    <Footer/>
    </div>
  )
}

export default MovieControl
