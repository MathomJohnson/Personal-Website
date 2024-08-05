import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-white">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Mathom Johnson</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <Link className="nav-link mx-3" to="/about">About</Link>
                    <Link className="nav-link mx-3" to="/skills">Skills</Link>
                    <Link className="nav-link mx-3" to="/projects">Projects</Link>
                    <Link className="nav-link mx-3" to="/contact">Contact</Link>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;