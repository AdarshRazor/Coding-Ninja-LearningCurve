import { createContext, useState } from "react";

// created the auth context
export const AuthContext = createContext();



export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null);

    // form information
    const [registerInfo, setRegisterInfo] = useState({
        name: "",
        email: "",
        password: ""
    });

    return (
        // provide all the context which we will be be using for the auth context
        <AuthContext.Provider value={{
            user,
            registerInfo
        }}>
            {children}
        </AuthContext.Provider>
    )
}