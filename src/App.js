import React from 'react'
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PrivateRoute/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
