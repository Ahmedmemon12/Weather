import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css'

export default function Navbar() {
    const pathName = window.location.pathname
    const [collapsed, setCollapsed] = useState(true);

    const handleToggle = () => {
      setCollapsed(!collapsed);
    }
    return (
        <div>
            <nav className="navbar fixed-top px-4 navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href='/' style={{cursor:'pointer'}}>
                    <img src="half-sun-and-snowflake-colorful-vector-icon-weather-forecast-symbol-2E2GBE7-removebg-preview.png" width="30" height="30" alt="" />
                        TempTracker
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={handleToggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className={`nav-link ${pathName === '/' ? 'active' : ''}`} href='/'>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${pathName === '/history' ? 'active' : ''}`} href='/history'>History</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${pathName === '/contact' ? 'active' : ''}`} href='/contact'>Contact me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
