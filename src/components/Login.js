import React, { useState, useEffect } from 'react';
import '../App.css';


const Login = () => {
  const [data, setData] = useState([]);

  return (
    <div className="login">
        <h1>Login to the NC Modernist Volunteer Portal</h1>
        <form className="login-form">
            <label htmlFor="username">Username: </label>
            <input 
                type="text"
                id="username" 
                name="username" 
                placeholder="Username"
            />
            <label htmlFor="password">Password: </label>
            <input 
                type="password"
                id="password" 
                name="password" 
                placeholder="Password"
            />
            <input type="submit" value="Login"/>
        </form>
    </div>
  );
}

export default Login;


