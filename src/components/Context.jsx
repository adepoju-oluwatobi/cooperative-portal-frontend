import React, {createContext, useState,useEffect} from 'react'
import { server } from '../server';
import axios from 'axios';

//const myContext = React.createContext();
//export default myContext;

export const coperativeUserContext = createContext({});

function CreatedContext({children}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

     axios.defaults.withCredentials = true;

    const [user, setUser] = useState(null);

    async function getUser()
    {
        try {
            if (!user)
            {
                const user = await axios.get(`${server}/profile`);
                //setUser(user);
                console.log(user.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getUser();
    },[]);
  return (
   <coperativeUserContext.Provider value = {{name, setName, email, setEmail, password, setPassword}}>
    {children}
    </coperativeUserContext.Provider>
  )
}

export default CreatedContext