import { createContext, useEffect, useState } from "react";



const UserContext = createContext({});

const UserProvider = ({children}) => {
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
      const [loggedIn, setLoggedIn] = useState(false);

      useEffect(()=>{
        // check if a user is logged in
        if(loggedIn){
            // auto-login the current user
            fetch('http://localhost:3000/me')
            .then((resp)=>{
              if(resp.ok) resp.json().then(resp=> setCurrentUser(resp));
            });
            
            
        };


      }, [loggedIn]);


    return <UserContext.Provider value={{user, setUser, meds, setMeds, currentUser, setCurrentUser, loggedIn, setLoggedIn}}>
        {children}
    </UserContext.Provider>
    
};

export {UserContext, UserProvider}