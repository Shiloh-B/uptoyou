import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, Routes, Route, useLocation } from 'react-router-dom';
import UserContext from '../context/UserContext';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';

const Login = () => {
  
  // global context
  const [user, setUser] = useContext(UserContext);

  // hooks
  const auth = getAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if(pathname === '/auth') {
      navigate('/auth/sign_in');
    }
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, user.email, user.password).then((userCredentials) => {
      // signed in success
      setUser(userCredentials.user);
      console.log('yay');
    }).catch((err) => console.log(err));
  }

  const handleSignUp = (e) => {
    e.preventDefault();

    // check if confirm pass === pass
    if(user.password !== user.confirmPassword) {
      console.log('pass confirmation fail');
      return;
    }

    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then(() => {
      updateProfile(auth.currentUser, {
        displayName: user.username
      }).then(() => {
        setUser(auth.currentUser);
      });
      console.log('yay but signed up');
    }).catch((err => console.log(err)));
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // sign out success
      navigate('/sign_in');
    }).catch((err) => {
      console.log(err);
    })
  }

  const authListener = () => {
  }

  const handleFormChange = (e) => {
    let newUser = {...user};

    newUser[e.target.name] = e.target.value;

    setUser(newUser);
  }

  return (
    <Routes>
      <Route path='/sign_in' element={<SignInForm handleSignIn={handleSignIn} handleFormChange={handleFormChange} />} />
      <Route path='/sign_up' element={<SignUpForm handleFormChange={handleFormChange} handleSignUp={handleSignUp} />} />
    </Routes>
  );
}

export default Login