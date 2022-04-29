import React from 'react'
import museum from "../assets/museum2.png";
import '../App.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-success bg-gradient shadow-sm  mb-1 rounded navbar-cs">
            <div className="container-fluid d-flex justify-content-center ">
                <a className="navbar-brand d-flex align-items-center " href="https://getbootstrap.com/docs/5.1/components/navbar/">
                    <img src={museum} alt="" width="50" height="50" className="d-inline-block align-text-top" />
                <strong  className="text-light " >The Museum</strong>
                </a>
            </div>
        </nav>
    )
}

export default Navbar