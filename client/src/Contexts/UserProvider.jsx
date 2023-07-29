import { createContext, useState, useEffect } from "react";

const UserContext = createContext({});

const UserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState({});
    const [userMeds, setUserMeds] = useState([currentUser.medications]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [allMeds, setAllMeds] = useState([]);
    const [selectedMed, setSelectedMed] = useState({
     
    });

    // 
        useEffect(()=>{
        fetch('http://localhost:3000/medications')
        .then((resp)=> resp.json())
        .then(resp=> setAllMeds(resp))
      }, [])
   


    return <UserContext.Provider value={{currentUser, setCurrentUser, loggedIn, setLoggedIn, selectedMed, setSelectedMed, userMeds, setUserMeds, allMeds, setAllMeds}}>{children}</UserContext.Provider>



};

export {UserContext, UserProvider}