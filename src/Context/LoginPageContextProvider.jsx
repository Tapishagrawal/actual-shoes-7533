import React, { createContext, useState } from 'react'

export const LoginPageContext = createContext();

const LoginPageContextProvider = ({ children }) => {
    const [isLoginPageVisibaleVisible, setIsLoginPageVisible] = useState(false);

    const handleToggleLoginPage = () => {
        setIsLoginPageVisible(!isLoginPageVisibaleVisible);
    }

    return (
        <LoginPageContext.Provider value={{ isLoginPageVisibaleVisible, handleToggleLoginPage }}>
            <div>
                {children}
            </div>
        </LoginPageContext.Provider>
    )
}
export default LoginPageContextProvider;

