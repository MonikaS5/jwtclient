// client/src/App.js
import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        setLoggedInUser(null); // Set logged-in user to null
    };

    return (
        <div className="App">
           
            {loggedInUser ? (
                <div className='mt-5 container container-fluid border border-secondary p-5 col-sm-3 justify-content-center'>
                    <h2>Welcome <span className='text-capitalize text-primary'>{loggedInUser.username}</span></h2>
                    <p>Email: {loggedInUser.email}</p>
                    
                    <button onClick={handleLogout} className='btn btn-primary p-2 m-2'>Logout</button>
                </div>
            ) : (
                <div>
                    <Register />
                    <Login setLoggedInUser={setLoggedInUser} />
                </div>
            )}
        </div>
    );
};

export default App;
