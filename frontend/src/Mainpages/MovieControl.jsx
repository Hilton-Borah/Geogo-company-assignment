import React from 'react'

const MovieControl = () => {
  return (
    <div className='mt-36 w-11/12 border flex justify-between m-auto border-black'>
      <form className='border w-2/5'>
        <input className='w-4/5 rounded-md outline-0 mb-5' placeholder='Enter title' value={""} name='' type="text" required/><br />
        <input className='w-4/5 rounded-md outline-0 mb-5' placeholder='Enter title' value={""} name='' type="text" required/><br />
        <input className='w-4/5 rounded-md outline-0 mb-5' placeholder='Enter title' value={""} name='' type="text" required/><br />
        <input className='w-4/5 rounded-md outline-0 mb-5' placeholder='Enter title' value={""} name='' type="text" required/><br />
        <input className='w-4/5 rounded-md outline-0 mb-5' placeholder='Enter title' value={""} name='' type="text" required/><br />
        <input className='w-4/5 rounded-md outline-0 mb-5' placeholder='Enter title' value={""} name='' type="text" required/><br />
        <input className='w-4/5 rounded-md outline-0 mb-5' placeholder='Enter title' value={""} name='' type="text" required/><br />
        <input className='w-4/5 rounded-md outline-0 mb-5' placeholder='Enter title' value={""} name='' type="text" required/><br />


        <button>Add</button>
      </form>
      <div className='border w-3/5'></div>
    </div>
  )
}

export default MovieControl
