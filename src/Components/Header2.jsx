import React from 'react';
import {Link} from 'react-router-dom';
const Header2 = () => {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
              <li className="nav-item">
                <link className="nav-link active" aria-current="page" to="/Home2">Home</link>
              </li>
              <li className="nav-item">
                <link className="nav-link" to="/register2">register</link>
              </li>
              <li className="nav-item dropdown">
                <link className="nav-link dropdown-toggle" to="/Login2" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Login
                </link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
             
            </ul>
           
          </div>
        </div>
      </nav>
        </div>
    )
}

export default Header2
