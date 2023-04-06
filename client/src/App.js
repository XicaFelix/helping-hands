import {  useEffect, useState } from 'react';

import { Routes, Route, Link } from 'react-router-dom'; 
import LandingPage from './components/LandingPage/LandingPage';
import MainPage from './components/LoggedInPages/MainPage';
import Medications from './components/LoggedInPages/Medications';
import LogInPage from './components/LogIn/LoginPage';
import EditPage from './components/MedicationCRUD/EditPage';

import SignUpPage from './components/SignUp/SignUpPage';




function App() {

  const [user, setUser] = useState({
    username: '',
    password: ''
  }); 

  const [meds, setMeds] = useState({
    dosage: '',
    id: 0,
    name: '',
    unit: '',
    times_per_day: 0,
    times_per_week: 0
  });



  const [currentUser, setCurrentUser] = useState({medications : [meds]});


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
        currentUser= {currentUser}
        setCurrentUser={setCurrentUser}
        />}
        />

      <Route
        path='/home'
        element={<MainPage
          user = {user}
          setUser = {setUser}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          meds = {meds}
          setMeds = {setMeds}
          />}
        /> 

      <Route
        path='/edit'
        element={<EditPage
          currentUser={currentUser}
          setCurrentUser = {setCurrentUser}
          meds = {meds}
          setMeds = {setMeds}
          />}
        />  
    </Routes>
  );
}

export default App;
