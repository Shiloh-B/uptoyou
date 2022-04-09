import "./index.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import RouteNotFound from './components/RouteNotFound';
import UserContext from './context/UserContext';

function App() {

  const [user, setUser] = useState({
    email: '',
    username: '',
    password: ''
  });

  return (
    <div className='h-screen bg-blue-400 flex items-center'>
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <Routes>
            <Route path='*' element={<RouteNotFound />} />
            <Route path='/auth/*' element={<Login />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
