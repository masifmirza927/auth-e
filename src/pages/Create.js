import React from 'react'

function Create() {
  return (
    <>
      <div style={{ width: "600px" }} className='mx-auto'>
        <div className="mb-3">
          <label htmlFor="formFile" class="form-label">Image</label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">About</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button className='btn btn-primary'>Create</button>
      </div>
    </>
  )
}

export default Create