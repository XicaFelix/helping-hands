import {  useEffect, useState} from 'react';

import { Routes, Route, Link } from 'react-router-dom'; 
import LandingPage from './components/LandingPage/LandingPage';
import MainPage from './components/LoggedInPages/MainPage';
import Medications from './components/LoggedInPages/Medications';
import LogInPage from './components/LogIn/LoginPage';
import EditPage from './components/MedicationCRUD/EditPage';

import SignUpPage from './components/SignUp/SignUpPage';
import AppointmentForm from './components/LoggedInPages/AppointmentForm';




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

   // auto-login the current user
   useEffect(()=>{
    fetch('http://localhost:3000/me')
    .then((resp)=>{
      if(resp.ok) resp.json().then(resp=> setCurrentUser(resp));
    })
  },[])


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

        <Route
          path='/appointment/new'
          element = {<AppointmentForm
            currentUser = {currentUser}
            setCurrentUser = {setCurrentUser}
          />}
        /> 
    </Routes>
  );
}

export default App;
