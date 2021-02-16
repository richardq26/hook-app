import React, { useState } from "react";
import { AppRouter } from "./AppRouter";
import { UserContext } from "./UserContext";

export const MainApp = () => {

  const [user, setUser] = useState({});
  return (
    /*El provider es para proveer información a lo largo de todos 
    sus componentes hijos, es decir, todo dentro del router  */
    <UserContext.Provider value={{user, setUser}}>
      {/*Doble{} porque lo de dentro es un objeto */}
      <AppRouter />
    </UserContext.Provider>
  );
};
