import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/Authentication/action';
import { useNavigate } from 'react-router-dom';

export const LoginInput = ({ onLogin, onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleAdmin = () => {
    if (username && password) {
      const admin = {
        username,
        password
      }
      dispatch(login(admin)).then(() => {
        navigate("/admin")
      })
    }
    else {
      setError('Please enter valid Admin Details');
    }
  }

  return (
    <div className=''>
      <div className='flex flex-col gap-5 justify-center items-center'>
        <h1 className='text-xl font-semibold text-zinc-700 my-2'>Welcome To Clothly.</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className='bg-transparent outline-none placeholder-zinc-500 w-[90%] border-b border-b-zinc-800'
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className='bg-transparent outline-none placeholder-zinc-500 w-[90%] border-b border-b-zinc-800'
        />
        <button onClick={handleLogin} className='bg-black text-white w-24 py-1 rounded'>Login</button>
        <p>Don't have an account? <button onClick={handleSignup} className='text-blue-600 text-sm'>Signup</button></p>
        <button onClick={handleAdmin} className='border border-black p-1 rounded'>Login as Admin</button>
        {error && <p className='text-red-600'>{error}</p>}
      </div>
    </div>
  );
};


