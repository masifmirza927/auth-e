import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios';

function Home() {

  const [students, setStudents] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:3003/students").then((res) => {
      if (res.data.status == true) {
        setStudents(res.data.students);
      }
    })
  }, []);

  if (students.length < 0) {
    return (
      <><div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div></>
    )
  } else {
    return (
      <>
        <div className='row'>
          {
            students.map((student) => {
              return (
                <div className='col-md-3' key={student._id}>
                  <div className="card" style={{ width: "18rem", marginBottom: "20px" }} >
                    <img src={student.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{student.name}</h5>
                      <Link to={`/student/${student._id}`} className="btn btn-primary">View</Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

      </>
    )
  }
}

export default Home