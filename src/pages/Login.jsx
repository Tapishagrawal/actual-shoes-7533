import React, { useEffect } from 'react'
import { useState } from "react"
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { login } from '../redux/Authentication/action';
import { LoginInput } from '../components/LoginInput';

export const Login = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('currentUser')) || null);
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
      }, [users]);

  const handleLogin = (authenticatedUser) => {
    setUser(authenticatedUser);
    localStorage.setItem('currentUser', JSON.stringify(authenticatedUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  const handleSignup = (newUser) => {
    setUsers([...users, newUser]);
    handleLogin(newUser);
  };

  return (
    <DIV >        
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoginInput onLogin={handleLogin} onSignup={handleSignup}/>        
      )}
    </DIV>
  );
    // const [email, setEmail] = useState("eve.holt@reqres.in");
    // const [password, setPassword] = useState("");
    // const dispatch = useDispatch();
    // const [user,setUser]=useState({});
    

    // const handleLogin = () => {
    //     const userDetails = {
    //         email,
    //         password,
    //     };        
    //     dispatch(login(userDetails))
    // }
    // const handleLogin=()=>{
    //     let users=JSON.parse(localStorage.getItem("users"));

    // }

    // return (
    //     <DIV >
    //         <h2> Login To Continue </h2>
    //        <label>Email :
    //         <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
    //         </label>
    //         <label>Password  :
    //         <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
    //         </label>
    //         <button onClick={handleLogin}>Login</button>
    //     </DIV>
    // )
}

const DIV = styled.div`
    
    border: 2px solid black;
    width:400px;
    margin:40px auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;   
   
    button{
        height: 35px;
        border: none;
    }
    input{
        border-color:black;
    }
`

// eve.holt@reqres.in






