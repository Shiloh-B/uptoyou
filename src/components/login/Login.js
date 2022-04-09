import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, Routes, Route, useLocation } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';

const Login = () => {
  
  // global context
  const [user, setUser] = useContext(UserContext);

  // state
  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: ''
  });

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

    // clear the errors
    setErrors({emailError: '', passwordError: ''});

    signInWithEmailAndPassword(auth, user.email, user.password).then((userCredentials) => {
      // signed in success
      setUser(userCredentials.user);
      navigate('/home');
    }).catch((err) => {
      switch(err.code) {
        case 'auth/invalid-email':
          setErrors((errors) => ({...errors, emailError: err.message}));
          break;
        case 'auth/user-disabled':
          setErrors((errors) => ({...errors, passwordError: err.message}));
          break;
        case 'auth/user-not-found':
          setErrors((errors) => ({...errors, passwordError: err.message}));
          break;
        case 'auth/wrong-password':
          setErrors((errors) => ({...errors, passwordError: err.message}));
          break;
        default: 
          console.log(err.message); 
          break;
      }
    });
  }

  const handleSignUp = (e) => {
    e.preventDefault();

    // clear the errors
    setErrors({emailError: '', passwordError: ''});

    // check if confirm pass === pass
    if(user.password !== user.confirmPassword) {
      setErrors((errors) => ({...errors, passwordError: 'Passwords must match.'}));
      return;
    }

    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then(() => {
      updateProfile(auth.currentUser, {
        displayName: user.username
      }).then(() => {
        setUser(auth.currentUser);
        navigate('/home');
      });
    }).catch((err) => {
      switch(err.code) {
        case 'auth/email-already-in-use':
          setErrors((errors) => ({...errors, emailError: 'Email already in use.'}));
          break;
        case 'auth/invalid-email':
          setErrors((errors) => ({...errors, emailError: 'Invalid email.'}));
          break;
        case 'auth/weak-password':
          setErrors((errors) => ({...errors, passwordError: 'Password must be at least 6 characters.'}));
          break;
        default:
          console.log(err.message); 
          break;
      }
    });
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // sign out success
      navigate('/sign_in');
    }).catch((err) => console.log(err));
  }

  const handleFormChange = (e) => {
    let newUser = {...user};

    newUser[e.target.name] = e.target.value;

    setUser(newUser);
  }

  return (
    <Routes>
      <Route path='/sign_in' element={<SignInForm handleSignIn={handleSignIn} handleFormChange={handleFormChange} errors={errors} setErrors={setErrors} />} />
      <Route path='/sign_up' element={<SignUpForm handleFormChange={handleFormChange} handleSignUp={handleSignUp} errors={errors} setErrors={setErrors} />} />
    </Routes>
  );
}

export default Login