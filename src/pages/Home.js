import {Link} from "react-router-dom"

function Home(props) {

    if (props.students.length < 0) {
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
                props.students.map((student) => {
                  return (
                    <div className='col-md-3' key={student._id}>
                      <div className="card" style={{ width: "18rem", marginBottom: "20px" }} >
                        <img src="https://serpapi.com/searches/6492992166440a9afc34505b/images/94a05dbbc2c3b322f5742251a14505827c91ac1fb679561d344158962506c9c8.jpeg" className="card-img-top" alt="..." />
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