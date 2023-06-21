import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";


function StudentDetail() {
    const [student, setStudent] = useState(null);
    const params = useParams();
    const id = params.id;

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
                {
                    student.name
                }
            </>
        )
    }

}

export default StudentDetail