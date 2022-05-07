import React from 'react'
import Radar from '../images/radar.png'

export default function Nav() {
    return (
        <nav className="nav-bar">
            <img src={Radar} alt="Logo" />
            <p>movieradar.com</p>
        </nav>
    )
}