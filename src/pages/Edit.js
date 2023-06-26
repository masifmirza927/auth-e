import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
  const params = useParams();
  const id = params.id;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    // validate values
    if (name && email && address && image) {

      // send data to server as form data
      axios.put('http://localhost:3003/update-student/' + id, {
        name: name,
        email: email,
        address: address,
        about: about,
        image: image
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      ).then( (res) => {
        if(res.data.status == true) {
          alert("successfully updated")
          navigate(-1)
        }
      })

    }else {
      alert("One or more filed is empty, all fields are required")
    }
    


  }

  useEffect(() => {
    axios.get("http://localhost:3003/student/" + id).then((res) => {
        if (res.data.status == true) {
            setName(res.data.student.name);
            setEmail(res.data.student.email);
            setAddress(res.data.student.address)
            setAbout(res.data.student.about)
        }
    })
}, []);

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
            <input value={name} onChange={(event) => { setName(event.target.value) }} type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input value={email} onChange={(event) => { setEmail(event.target.value) }} type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input value={address} onChange={(event) => { setAddress(event.target.value) }} type="text" className="form-control" id="address" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">About</label>
            <textarea value={about} onChange={(event) => { setAbout(event.target.value) }} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button onClick={handleSubmit} className='btn btn-primary'>Update</button>
        </div>
      </form>

    </>
  )
}

export default Edit