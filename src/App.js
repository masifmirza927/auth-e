import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Create from "./pages/Create"
import Edit from './pages/Edit';
import StudentDetail from "./pages/StudentDetail"
import Search from './pages/Search';

function App() {

  return (
    <div className='container'>
      <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path='/search' element={<Search />} />
      <Route path='/student/:id' element={<StudentDetail />} /> 
      <Route path='/edit/:id' element={<Edit />} /> 
    </Routes>

    </div>
  );
}

export default App;
