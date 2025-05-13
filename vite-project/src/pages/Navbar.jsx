import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };
  const goToSignup = () => {
    navigate('/signup')
  }
  return (
    <>
      <nav className="navbar  container-fluid d-flex  fixed-top ">
  <div className="d-flex  flex-wrap ms-0 ms-md-3 align-items-center justify-content-between ">
    <div className="">
      <a className="navbar-brand  fs-4 ">Bamito</a>
      <span>Explore</span>
    </div>
    <div className="dropdown d-flex p-0 d-sm-none">
  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    insights
  </button>
  <ul className="dropdown-menu text-decoration-none">
    <li><a className="dropdown-item text-decoration-none " href="#">About</a></li>
    <li><a className="dropdown-item " href="#">Business</a></li>
    <li><a className="dropdown-item " href="#">Blog</a></li>
  </ul>
</div>

<div className="btn-group d-block d-sm-none">
  <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    <img src="src/assets/account-svgrepo-com.svg" alt="" width={25} />
    <span>Account</span>
  </button>
  <ul className="dropdown-menu dropdown-menu-start ">
    <li><button className='text-white rounded ms-1 p-2  dropdown-item' style={{background:'#2a2539' }}>Log in</button></li>
    <li><button className=' rounded p-2 ms-1 mt-3  dropdown-item' style={{background:'#bdd3cc' }}>Sign up</button></li>
  </ul>
      </div>  
    </div>

    

    <div className="d-flex flex-wrap gap-4 me-3 align-items-center justify-content-between">
      <div className="d-flex flex-wrap gap-3 d-none d-md-flex  align-items-center justify-content-between ">
      <a href="#" className='text-decoration-none text-black '>About</a>
      <a href="#" className='text-decoration-none text-black'>Business</a>
      <a href="#" className='text-decoration-none text-black'>Blog</a>
      </div>

      

      <div className="d-none d-sm-flex justify-content-around flex-wrap gap-2 gap-sm-4 align-items-center justify-content-between">
      <button className=' rounded p-1 p-md-2' onClick={goToLogin} style={{background:'#bdd3cc' }}>Log in</button>
      <button className='rounded p-1 p-md-2' onClick={goToSignup} style={{background:'#bdd3cc' }}>Sign up</button>
      </div>
    </div>
</nav>
    </>
  )
}

export default Navbar