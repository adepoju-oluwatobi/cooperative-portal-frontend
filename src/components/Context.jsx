import React, { createContext, useState, useEffect } from "react";
import { server } from "../server";
import axios from "axios";

//const myContext = React.createContext();
//export default myContext;

export const coperativeUserContext = createContext({});

function CreatedContext({ children }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  axios.defaults.withCredentials = true;

  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  async function getUser() {
    try {
      if (!user) {
        // const user = await axios.get(`${server}/profile`);
       // const user = await axios.get('');
        setUser(user);
        setReady(true);
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <coperativeUserContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        user,
        setUser,
      }}
    >
      {children}
    </coperativeUserContext.Provider>
  );
}

export default CreatedContext;
