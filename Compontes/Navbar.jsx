import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div >
        <nav  className="navbar navbar-expand-lg bg-dark">
  <div style={{padding:"4px"}} className="container-fluid">
    <Link style={{padding:"10px",fontSize:"30px"}} className="navbar-brand text-white " to="#"> NEWS <span className=" text-info">HUB</span> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  style={{fontSize:"25px"}} className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item  ">
          <Link className="nav-link active text-white" aria-current="page" to="/home">Home</Link>
        </li>f

        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/business">
            Business
            </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/Entertainment">
            Entertainment
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/Health">
            Health
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/Science">
            Science
          </Link >
        </li>

        <li className="nav-item">
         < Link  className="nav-link active text-white" aria-current="page" to="/Sports">
            Sports
          </Link>
        </li>

        <li className="nav-item">
         < Link  className="nav-link active text-white" aria-current="page" to="/Technology">
            Technology 
          </Link >
        </li>
        
      </ul> 
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar