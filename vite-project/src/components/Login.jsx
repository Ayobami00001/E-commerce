import React, { useState } from 'react';
import Navbar from '../pages/Navbar';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './Dashboard';



const Login = () => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  const goToSignup = () => {
    navigate('/signup');
  };

  const Submit = (e) => {
  // e.preventDefault(); // prevent page reload
  if (mail === '' || pass === '') {
    alert("Please fill in all fields");
  } else {
    const data = { mail, pass };
    axios.post("http://localhost:2003/login", data)
  .then((res) => {
    console.log(res.data);
    if (res.data.status === "success") {
      navigate('/dashboard'); // only navigate if login is successful
    } else {
      alert(res.data.message || "Login failed");
    }
  })
  .catch((err) => {
    console.error("Login error:", err);
    alert("An error occurred during login");
      });

    setMail('');
    setPass('');
  }
};

  return (
    <>
      <div>
        <Navbar />
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
              Login
            </h3>
            <form>
              <div className="mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e)=>setMail(e.target.value)}
                  value={mail}
                  style={{
                    backgroundColor: '#34495e',
                    color: '#ecf0f1',
                    border: 'none',
                  }}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e)=>setPass(e.target.value)}
                  value={pass}
                  id="exampleInputPassword1"
                  style={{
                    backgroundColor: '#34495e',
                    color: '#ecf0f1',
                    border: 'none',
                  }}
                />
              </div>
              <div className="mb-4 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label"
                  htmlFor="exampleCheck1"
                  style={{ color: '#bdc3c7' }}
                >
                  Remember Me
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-warning w-100 mb-3"
                style={{ fontWeight: 'bold' }}
                onClick={Submit}
              >
                Login
              </button>
              <p className="text-center" style={{ color: '#bdc3c7' }}>
                Don't have an account?{' '}
                <span
                  onClick={goToSignup}
                  style={{
                    color: '#f39c12',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                >
                  Sign Up
                </span>
              </p>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;