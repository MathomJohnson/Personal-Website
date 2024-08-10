import './Navbar.css'
import '../App.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-white">
            <div className="container-fluid">
                <a className="navbar-brand inter-reg" href="/">Mathom Johnson</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <a className="nav-link mx-4 inter-reg" href="#about">About</a>
                    <a className="nav-link mx-4 inter-reg" href="#skills">Skills</a>
                    <a className="nav-link mx-4 inter-reg" href="#projects">Projects</a>
                    <a className="nav-link mx-4 inter-reg" href="#contact">Contact</a>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;