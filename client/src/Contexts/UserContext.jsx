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

      useEffect(()=>{

      }, []);


    return <UserContext.Provider value={{user, setUser, meds, setMeds, currentUser, setCurrentUser}}>
        {children}
    </UserContext.Provider>
    
};