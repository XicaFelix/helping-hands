import { Routes, Route, Link } from 'react-router-dom'; 
import LandingPage from './components/LandingPage/LandingPage';
import MainPage from './components/LoggedInPages/MainPage';
import LogInPage from './components/LogIn/LoginPage';

import SignUpPage from './components/SignUp/SignUpPage';

function App() {
  return (
    <Routes>
      <Route 
        path='/'
        element= {<LandingPage/>}
      />

      <Route
        path='/signup'
        element={<SignUpPage/>}
        />

      <Route
        path='/login'
        element={<LogInPage/>}
        />

      <Route
        path='/home'
        element={<MainPage/>}
        />
    </Routes>
  );
}

export default App;
