import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from "axios";


function StudentDetail() {
    const [student, setStudent] = useState(null);
    const params = useParams();
    const navigate = useNavigate();
    const id = params.id;


const handleDelete = () => {
    if(window.confirm("are you sure?") == true) {
        axios.delete("http://localhost:3003/student-delete/"+id).then( (res) => {
            if(res.data.status == true) {
                alert("successfully deleted");
                navigate("/");
            }
        })
      }
}    


    useEffect(() => {
        axios.get("http://localhost:3003/student/" + id).then((res) => {
            if (res.data.status == true) {
                setStudent(res.data.student);
            }
        })
    }, []);

    if (student != null) {
        return (
            <>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={student.image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{student.name}</h5>
                                <p className="card-text">{student.email}</p>
                                <p className="card-text">{student.address}</p>
                                <p className="card-text">{student.about}</p>
                            </div>
                            <div>
                                <Link to="/" className="btn btn-info mx-2">Edit</Link>
                                <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default StudentDetail