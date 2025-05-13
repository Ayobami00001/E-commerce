import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import axios from 'axios';


const Signup = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    // const [submittedForm, setSubmittedForm] = useState("");

    let navigate = useNavigate()

    const Submit = (e) => {
      if (name=="" || mail=="" || pass=="") {
        alert("warning")
      }else{
        let dataOne = {name , mail , pass}
        setName ('');
        setMail ('');
        setPass ('')
        console.log(dataOne);
        

        axios.post("http://localhost:2003/register", dataOne)
      }
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
            <form >
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
                onClick={Submit}
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