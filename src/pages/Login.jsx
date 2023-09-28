import React from 'react'
import { useState } from "react"
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { login } from '../redux/Authentication/action';

export const Login = () => {
    const [email, setEmail] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    

    const handleLogin = () => {
        const userDetails = {
            email,
            password,
        };
        
        dispatch(login(userDetails))
    }

    return (
        <DIV >
            <h2> Login To Continue </h2>
           <label>Email :
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>Password  :
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
        </DIV>
    )
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