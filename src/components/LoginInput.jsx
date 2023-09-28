import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/Authentication/action';
import { useNavigate } from 'react-router-dom';

export const LoginInput =({ onLogin,onSignup  }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();
  
    const handleLogin = () => {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = storedUsers.find(u => u.username === username && u.password === password);
      if (user) {
        onLogin(user);
        setError('');
      } else {
        setError('Invalid credentials');
      }
    };

    const handleSignup = () => {
      if (username && password) {
        onSignup({ username, password });
        setUsername('');
        setPassword('');
        setError('');
      } else {
        setError('Please enter both username and password.');
      }
    };

    const handleAdmin=()=>{
      if(username&&password){
      const admin={
        username,
        password
      }
      dispatch(login(admin)).then(() => {
        navigate("/admin" )
      })
    }
    else{
      setError('Please enter valid Admin Details');
    }
    }
  
    return (
      <div>
        <h1>Login user</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <br></br>
        <button onClick={handleSignup}>Signup</button>
        <br></br>
        <button onClick={handleAdmin}>Login as Admin</button>
        {error && <p>{error}</p>}
      </div>
    );
  };


  