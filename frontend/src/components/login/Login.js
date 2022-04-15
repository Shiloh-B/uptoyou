import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, Routes, Route, useLocation } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import PasswordResetConfirmation from './PasswordResetConfirmation';

const Login = () => {
  
  // global context
  const [user, setUser] = useContext(UserContext);

  // state
  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: ''
  });
  const [sendingRequest, setSendingRequest] = useState(false);

  // hooks
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if(pathname === '/auth') {
      navigate('/auth/sign_in');
    }
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();

    // clear the errors
    setErrors({emailError: '', passwordError: ''});

    setSendingRequest(true);

    fetch("http://localhost:3000/auth/sign_in", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password
      }),
    }).then((res) => {
      setSendingRequest(false);
      return res.json();
    }).then((data) => {
      if(data.uid) {
        setUser((user) => ({...user, uid: data.uid}));
        navigate('/home/landing');
      }
      setErrors({passwordError: "Wrong username or password."})
    }).catch(err => console.log(err));
  }

  const handleSignUp = (e) => {
    e.preventDefault();

    // clear the errors
    setErrors({emailError: '', passwordError: ''});

    setSendingRequest(true);

    // check if confirm pass === pass
    if(user.password !== user.confirmPassword) {
      setErrors((errors) => ({...errors, passwordError: 'Passwords must match.'}));
      return;
    }

    // new
    fetch("http://localhost:3000/auth/sign_up", {
      method: 'POST',
      body: JSON.stringify({
        email: user.email,
        password: user.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      setSendingRequest(false);
      return res.json()
    }).then((data) => {
      if(data.uid) {
        setUser((user) => ({email: user.email, uid: data.uid}));
        navigate('/home/landing');
      }

      switch(data.message) {
        case 'WEAK_PASSWORD : Password should be at least 6 characters':
          setErrors({passwordError: 'Password must be at least 6 characters.'});
          break;
        case 'EMAIL_EXISTS':
          setErrors({emailError: 'Email already in use.'});
          break;
        default:
          break;
      }
    });
  }

  const handlePasswordReset = (e) => {
    e.preventDefault();
    setSendingRequest(true);

    fetch('http://localhost:3000/auth/reset_password', {
      method: 'POST',
      body: JSON.stringify({
        email: user.email
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      setSendingRequest(false);
      return res.json()
    }).then((data) => {
      navigate('/auth/reset_confirmation');
    }).catch(err => console.log(err));
  }

  

  const handleFormChange = (e) => {
    let newUser = {...user};

    newUser[e.target.name] = e.target.value;

    setUser(newUser);
  }

  return (
    <Routes>
      <Route path='/sign_in' element={<SignInForm handleSignIn={handleSignIn} handleFormChange={handleFormChange} errors={errors} sendingRequest={sendingRequest} setErrors={setErrors} />} />
      <Route path='/sign_up' element={<SignUpForm handleFormChange={handleFormChange} handleSignUp={handleSignUp} errors={errors} sendingRequest={sendingRequest} setErrors={setErrors} />} />
      <Route path='/reset_password' element={<ForgotPasswordForm handlePasswordReset={handlePasswordReset} handleFormChange={handleFormChange} sendingRequest={sendingRequest} />} />
      <Route path='/reset_confirmation' element={<PasswordResetConfirmation />} />
    </Routes>
  );
}

export default Login