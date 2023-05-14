import React from 'react'
import {Link} from "react-router-dom"

function Header() {
    const clickHandler = (e) =>{
        e.preventDefault();
    }


  return (
    <div>
        <header className="w-100">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="w-100" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
          </Link>
          
          <div className="navbar">
            <form className="d-flex" role="search">
              <select>
                <option>English</option>
                <option>Hindi</option>
              </select>
              <button className="btn btn-danger" onClick={clickHandler}>Signin</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default Header