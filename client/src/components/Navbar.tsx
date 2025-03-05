import './Navbar.css'
import '../App.css'

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-md bg-body-white">
            <div className="container-fluid">
                {/* <a className="navbar-brand inter-reg">Mathom Johnson</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav center-nav">
                    <a className="nav-link mx-5 inter-reg" href="#about">About</a>
                    <a className="nav-link mx-5 inter-reg" href="#skills">Skills</a>
                    <a className="nav-link mx-5 inter-reg" href="#projects">Projects</a>
                    <a className="nav-link mx-5 inter-reg" href="#contact">Contact</a>
                </div>
                </div>
            </div>
        </nav>
        <div id="nav-page-links">
            <div className="custom-links">
                <a className="nav-link inter-reg" href="#about">About</a>
                <a className="nav-link inter-reg" href="#skills">Skills</a>
                <a className="nav-link inter-reg" href="#projects">Projects</a>
                <a className="nav-link inter-reg" href="#contact">Contact</a>
            </div>
        </div>
        </>
    )
}

export default Navbar;