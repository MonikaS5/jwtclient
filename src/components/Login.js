// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';


const Login = ({ setLoggedInUser }) => {

    const [formData, setFormData] = useState({
       
        email:'',
        password: ''
    });
    const [message, setMessage] = useState('');

    const { email, password } = formData;

    const handleChange = e => setFormData({ ...formData, 
                                      [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = 
                await axios.post('https://jwtserver-195j.onrender.com/api/auth/login', 
            {
               
                email,
                password
            });
            localStorage.setItem('token', res.data.token);
            setLoggedInUser( {email,  username:res.data.username});
           
            
            // Set success message
            setMessage('Logged in successfully');
        } catch (err) {
            console.error(err.response.data);
            // Set error message
            setMessage('Failed to login - wrong credentials');         
        }
    };

    return (
        <div className='container container-fluid  col-sm-3 justify-content-center'>
        <h2 className='display-3 text-center'>Login</h2>
        
          <form onSubmit={handleSubmit}>
            
            <div className='form-group'>
            <label>Email:</label>
            <input type="email" name="email" value={email} onChange={handleChange} required className='form-control'/>
          </div>
            <div className='form-group'>
              <label>Password:</label>
              <input type="password" name="password" value={password} onChange={handleChange} required className='form-control'/>
            </div>
            
            <div>
              <button type="submit" className='btn btn-primary p-2 m-2'>Login</button>
            </div>
            
          </form>
          <p className=" text-success">{message}</p>
        </div>

    );
};

export default Login;
