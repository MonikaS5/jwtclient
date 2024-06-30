// client/src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {

    const [formData, setFormData] = useState({
        username: '',
        email:'',
        password: ''
    });
    const [message, setMessage] = useState('');

    const { username, email, password } = formData;

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('https://jwtserver-195j.onrender.com/api/auth/register', {
                username,
                email,
                password
            });
            setMessage('Registered successfully'); // Set success message
        } catch (err) {
            console.error(err.response.data);
            setMessage('Failed to register, User already exists'); // Set error message
        }
    };

    return (

        <div className='container container-fluid  col-sm-3 justify-content-center'>
        <h2 className='display-3 text-center'>Register</h2>
        
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>UserName:</label>
              <input type="text" name="username" value={username} onChange={handleChange} required className='form-control'/>
            </div>
            <div className='form-group'>
            <label>Email:</label>
            <input type="email" name="email" value={email} onChange={handleChange} required className='form-control'/>
          </div>
            <div className='form-group'>
              <label>Password:</label>
              <input type="password" name="password" value={password} onChange={handleChange} required className='form-control'/>
            </div>
            
            <div>
              <button type="submit" className='btn btn-primary p-2 m-2'>Register</button>
            </div>

          </form>
          <p className=" text-primary">{message}</p>
          
          
        </div>

    );
};

export default Register;
