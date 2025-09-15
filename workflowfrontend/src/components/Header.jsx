import React from "react";

import { NavLink } from "react-router-dom";
import datasolve from '../assets/datasolve.png'

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-light ">
    <div className="container-fluid">
    <img src={datasolve} alt="Datasolvelogo" height={50} />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
        {/* <li className="nav-item">
          <NavLink classNameName="nav-link active text-dark" aria-current="page" to="/workflow">Workflow</NavLink>
        </li> */}
        </ul>
       
        {/* <form className="d-flex" role="search"> */}
          {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-dark m-1" type="submit"> <i className="bi bi-search"></i></button> */}
          {/* <button className="btn btn-outline-dark m-1" type="submit"><i class="bi bi-person-fill"></i></button> */}
        {/* </form> */}
       <div className="d-flex justify-content-end">
       <p className="mb-0 fw-medium">Last Updated Date: 02/04/2025</p>
       </div>
      </div>
    </div>
  </nav>
  );
};

 
