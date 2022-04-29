import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-success">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://getbootstrap.com/docs/5.1/components/navbar/">
                    <img src="https://img.icons8.com/dusk/344/museum.png" alt="" width="60" height="48" className="d-inline-block align-text-top" />
                <strong  className="text-light" >The Museum</strong>
                </a>
            </div>
        </nav>
    )
}

export default Navbar