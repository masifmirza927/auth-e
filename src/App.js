import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Create from "./pages/Create"
import StudentDetail from "./pages/StudentDetail"
import Search from './pages/Search';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);

useEffect( () => {

  axios.get("http://localhost:3003/students").then( (res) => {
    console.log(res.data);
    if(res.data.status == true) {
      setStudents(res.data.students);
    }
  })


 }, [] );

  return (
    <div className='container'>
      <Navbar />

    <Routes>
      <Route path='/' element={<Home students={students} />} />
      <Route path="/create" element={<Create />} />
      <Route path='/search' element={<Search />} />
      <Route path='/student/:id' element={<StudentDetail />} /> 
    </Routes>

    </div>
  );
}

export default App;
