import React, { useState } from 'react'
import axios from "axios";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    // validate values
    if (name && email && address && image) {
      // create formData
      const form = new FormData();
      form.append("name", name);
      form.append("email", email);
      form.append("address", address);
      form.append("about", about);
      form.append("image", image);


      // send data to server as form data
      axios.post('http://localhost:3003/create-student/', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      ).then( (res) => {
        console.log(res.data)
      })

    }


  }

  return (
    <>
      <form onSubmit={(event) => { event.preventDefault() }}>
        <div style={{ width: "600px" }} className='mx-auto'>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Image</label>
            <input onChange={(event) => { setImage(event.target.files[0]) }} className="form-control" type="file" id="formFile" />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input onChange={(event) => { setName(event.target.value) }} type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input onChange={(event) => { setEmail(event.target.value) }} type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input onChange={(event) => { setAddress(event.target.value) }} type="text" className="form-control" id="address" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">About</label>
            <textarea onChange={(event) => { setAbout(event.target.value) }} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button onClick={handleSubmit} className='btn btn-primary'>Create</button>
        </div>
      </form>

    </>
  )
}

export default Create