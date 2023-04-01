import {  useEffect, useState } from 'react';

import { Routes, Route, Link } from 'react-router-dom'; 
import LandingPage from './components/LandingPage/LandingPage';
import MainPage from './components/LoggedInPages/MainPage';
import LogInPage from './components/LogIn/LoginPage';
import EditPage from './components/MedicationCRUD/EditPage';

import SignUpPage from './components/SignUp/SignUpPage';




function App() {

  const [user, setUser] = useState({
    username: '',
    password: ''
  }); 

  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Routes>
      <Route 
        path='/'
        element= {<LandingPage/>}
      />

      <Route
        path='/signup'
        element={<SignUpPage/>}/>

      <Route
        path='/login'
        element={<LogInPage
        user = {user}
        setUser = {setUser}
        />}
        />

      <Route
        path='/home'
        element={<MainPage/>}
        />

      <Route
        path='/edit'
        element={<EditPage/>}
        />  
    </Routes>
  );
}

export default App;
