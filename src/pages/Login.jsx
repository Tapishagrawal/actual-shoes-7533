import React, { useContext, useEffect } from 'react'
import { useState } from "react"
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { login } from '../redux/Authentication/action';
import { LoginInput } from '../components/LoginInput';
import { motion } from "framer-motion"
import { LoginPageContext } from '../Context/LoginPageContextProvider';

export const Login = () => {
  const {handleToggleLoginPage} = useContext(LoginPageContext)
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
    <div className='relative'>
      <motion.div initial={{opacity:0}}
      animate={{opacity:1}}
      className='bg-black/50 z-[999] backdrop-blur-lg fixed top-0 left-0 w-full h-full'></motion.div>
      <motion.div
        className='fixed z-[999] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] backdrop-blur-2xl bg-blue-50/40 p-5 text-center  w-[380px]  rounded-md
        '
        initial={{ opacity: 0, x: "-50%", y: "-50%", scale: 0 }}
        animate={{ opacity: 1, x: "-50%", y: "-50%", scale: 1 }}
      >
      <p className='absolute cursor-pointer top-2 right-3 font-semibold text-lg text-zinc-600 hover:text-red-900 transition' onClick={handleToggleLoginPage}>X</p>
        <div className='flex justify-center'>
          <img className='rounded-full w-[150px] shadow-[0_2px_4px_rgba(0,0,0,0.4),0_7px_13px_-3px_rgba(0,0,0,0.3)]' src="https://img.freepik.com/premium-vector/happy-smiling-young-man-avatar-3d-portrait-man-cartoon-character-people-vector-illustration_653240-187.jpg" alt="" />
        </div>
        {user ? (
          <div>
            <h2>Welcome, {user.username}!</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <LoginInput onLogin={handleLogin} onSignup={handleSignup} />
        )}
      </motion.div>

    </div>
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

// eve.holt@reqres.in






