import React, { useState } from 'react'
import cv from './felixhigueraWebsiteCV.pdf'

const Navbar = () => {

    const [state, setState] = useState(false)
    const handleClick = () => {
        setState(!state)

    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top " style={{ backgroundColor: "#e9effd" }}>
                <div className="button-cv">
                    <a role="button" href={cv}
                        download="Felix CV">
                        <button>Download CV</button>
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={state ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'} id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <a className="nav-item nav-link" onClick={handleClick} style={{ color: "#027bfe" }} href="#home">Home</a>

                        <a className="nav-item nav-link" onClick={handleClick} style={{ color: "#027bfe" }} href="#aboutme">About me</a>
                        <a className="nav-item nav-link " onClick={handleClick} style={{ color: "#027bfe" }} href="#projects">Projects</a>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
