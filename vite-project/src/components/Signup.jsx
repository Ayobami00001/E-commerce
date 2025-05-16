import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import axios from 'axios';


const Signup = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const goToLogin = () =>{
      navigate('/login')
    }
    // const [submittedForm, setSubmittedForm] = useState("");

    
    const Submit = (e) => {
      e.preventDefault();
      
      
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


      if (name=="" || mail=="" || pass=="") {
        setError("Please fill in all fields");
        return;
      }
       if (!emailRegex.test(mail)) {
        setError("Invalid email format.");
        return;
    }
    if (!passwordRegex.test(pass)) {
        setError("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
        return;
    }
      
      
        let dataOne = {name , mail , pass}
        
        console.log(dataOne);
        

        axios.post("http://localhost:2003/register", dataOne)
        .then((res) => {
            if (res.data.status === "user") {
                setError("User already exists");
                console.log("User already exists");
            } else if (res.data.status === "success") {
              setError('');
              setName ('');
              setMail ('');
              setPass ('');
              navigate('/login');
            }else {
        setError("Unknown error occurred.");
      }
                
            
        })
        .catch((err) => {
            setError("Something went wrong, try again.");
            console.log(err);
        });
      
    }

  
    return (
        <>
        <div className='bg-dark'>
        <Navbar/>
        <section
          className="d-flex flex-column justify-content-center align-items-center bg-dark text-white"
          style={{ height: '100vh', padding: '20px' }}
        >
          <div
            className="p-5 rounded shadow-lg"
            style={{
              backgroundColor: '#2c3e50',
              maxWidth: '400px',
              width: '100%',
            }}
          >
            <h3 className="text-center mb-4" style={{ color: '#f39c12' }}>
              Sign Up
            </h3>
            <form onSubmit={Submit}>
              {error && (
                <div className="alert alert-danger text-center py-2">{error}</div>
              )}
              <div className="mb-4">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  onChange={(e)=>setName(e.target.value)}
                  value = {name}
                  
                  required
                  style={{
                    backgroundColor: '#34495e',
                    color: '#ecf0f1',
                    border: 'none',
                  }}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={(e)=>setMail(e.target.value)}
                  value = {mail}
                  
                  required
                  style={{
                    backgroundColor: '#34495e',
                    color: '#ecf0f1',
                    border: 'none',
                  }}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={(e)=>setPass(e.target.value)}
                  value = {pass}
                  
                  required
                  style={{
                    backgroundColor: '#34495e',
                    color: '#ecf0f1',
                    border: 'none',
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-warning w-100 mb-3"
                style={{ fontWeight: 'bold' }}
                
                
              >
                Sign Up
              </button>
              <p className="text-center" style={{ color: '#bdc3c7' }}>
                Already have an account?{' '}
                <span
                  style={{
                    color: '#f39c12',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                  onClick={goToLogin}
                >
                  Login
                </span>
              </p>
            </form>
          </div>
        </section>
      </div>
        </>
    );
};

export default Signup;