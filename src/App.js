import "./index.css";
import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import UserContext from './context/UserContext';

function App() {

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  return (
    <div className='bg-slate-100'>
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
