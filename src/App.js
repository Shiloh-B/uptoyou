import "./build.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import RouteNotFound from './components/RouteNotFound';
import Home from './components/home/Home';
import UserContext from './context/UserContext';

function App() {

  const [user, setUser] = useState({
    email: '',
    username: '',
    password: ''
  });

  return (
    <div className='h-screen'>
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <Routes>
            <Route path='*' element={<RouteNotFound />} />
            <Route path='/auth/*' element={<Login />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
