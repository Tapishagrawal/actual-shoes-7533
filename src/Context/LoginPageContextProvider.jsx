import React, { createContext, useState } from 'react'

export const LoginPageContext = createContext();

const LoginPageContextProvider = ({ children }) => {
    const [isLoginPageVisibaleVisible, setIsLoginPageVisible] = useState(false);
    const [adminAuth,setadminAuth] = useState(localStorage.getItem("adminAuth") || null)
    const [singlUser,setSinglUser] = useState(localStorage.getItem("currentUser") || null)

    const handleToggleLoginPage = () => {
        setSinglUser(true)
        setIsLoginPageVisible(!isLoginPageVisibaleVisible);
    }

    return (
        <LoginPageContext.Provider value={{ isLoginPageVisibaleVisible, handleToggleLoginPage, adminAuth, setadminAuth, singlUser, setSinglUser }}>
            <div>
                {children}
            </div>
        </LoginPageContext.Provider>
    )
}
export default LoginPageContextProvider;

