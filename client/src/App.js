import {  useEffect, useState} from 'react';

import { Routes, Route, Link } from 'react-router-dom'; 
import LandingPage from './components/LandingPage/LandingPage';
import MainPage from './components/LoggedInPages/MainPage';
import Medications from './components/LoggedInPages/Medications';
import LogInPage from './components/LogIn/LoginPage';
import EditPage from './components/MedicationCRUD/EditPage';

import SignUpPage from './components/SignUp/SignUpPage';
import AppointmentForm from './components/LoggedInPages/AppointmentForm';
import { UserProvider } from './Contexts/UserProvider.jsx';
import AppHeader from './components/Header';
import MedicationForm from './components/MedicationCRUD/MedicationForm';
import AddMedForm from './components/MedicationCRUD/AddMedForm';
import NewMedPage from './components/MedicationCRUD/NewMedPage';




function App() {

  return (
    <UserProvider>
      <Routes>
        <Route 
          path='/'
          element= {<LandingPage/>}
        />

        <Route
        element= {<AppHeader/>} 
        />

        <Route
          path='/signup'
          element={<SignUpPage/>}/>

        <Route
          path='/login'
          element={<LogInPage/>}
          />

        <Route
          path='/home'
          element={<MainPage/>}
          /> 

        <Route
          path='/edit'
          element={<EditPage/>}
          /> 

        <Route 
          element={<Medications/>}
        />
          <Route
            element={<MedicationForm/>}
          />

        <Route
           path='/medication/new'
          element={<NewMedPage/>}
          />

        <Route
            path='/appointment/new'
            element = {<AppointmentForm/>}
          /> 
      </Routes>
    </UserProvider>
    
  );
}

export default App;
