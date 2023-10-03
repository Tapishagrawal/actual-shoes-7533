import React, { createContext, useState } from 'react'

export const LoginPageContext = createContext();

const LoginPageContextProvider = ({ children }) => {
    const [isLoginPageVisibaleVisible, setIsLoginPageVisible] = useState(false);
    const [adminAuth,setadminAuth] = useState(localStorage.getItem("adminAuth") || null)

    const handleToggleLoginPage = () => {
        setIsLoginPageVisible(!isLoginPageVisibaleVisible);
    }

    return (
        <LoginPageContext.Provider value={{ isLoginPageVisibaleVisible, handleToggleLoginPage, adminAuth, setadminAuth }}>
            <div>
                {children}
            </div>
        </LoginPageContext.Provider>
    )
}
export default LoginPageContextProvider;

