import {createContext, useState} from "react";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {

  const [user, setUser] = useState("user");
  const [activeSidebar, setActiveSidebar] = useState("Home");
  const [newPost, setNewPost] = useState(false);

  return (
    <AppContext.Provider value={{user, setUser, activeSidebar, setActiveSidebar, newPost, setNewPost}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;