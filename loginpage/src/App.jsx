
import Appbar from './Appbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Signin from './Signin';
import Addcourses from './Addcourses';
import Courses from './Courses';

function App() {

  return (
    <div style={{width:"100vw", height:"100vw", backgroundColor:"#eeeeee"}}>
      <Router>
        <Appbar/>
        <Routes>
          
          <Route path='/addCourses' element={<Addcourses />}/>
          <Route path='/Courses' element={<Courses />}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  )
}



export default App

