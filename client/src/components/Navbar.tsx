// import './Navbar.css'
// import '../App.css'

// function Navbar() {
//     return (
//         <>
//         <nav className="navbar navbar-expand-md bg-body-white">
//             <div className="container-fluid">
//                 {/* <a className="navbar-brand inter-reg">Mathom Johnson</a> */}
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//                 <div className="navbar-nav center-nav">
//                     <a className="nav-link mx-5 inter-reg" href="#about">About</a>
//                     <a className="nav-link mx-5 inter-reg" href="#skills">Skills</a>
//                     <a className="nav-link mx-5 inter-reg" href="#projects">Projects</a>
//                     <a className="nav-link mx-5 inter-reg" href="#contact">Contact</a>
//                 </div>
//                 </div>
//             </div>
//         </nav>
//         <div id="nav-page-links">
//             <div className="custom-links">
//                 <a className="nav-link inter-reg" href="#about">About</a>
//                 <a className="nav-link inter-reg" href="#skills">Skills</a>
//                 <a className="nav-link inter-reg" href="#projects">Projects</a>
//                 <a className="nav-link inter-reg" href="#contact">Contact</a>
//             </div>
//         </div>
//         </>
//     )
// }

// export default Navbar;

import { useState } from 'react';
import './Navbar.css';
import '../App.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-md bg-body-white">
                <div className="container-fluid">
                    {/* <a className="navbar-brand inter-reg">Mathom Johnson</a> */}
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
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

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="mobile-menu-overlay">
                    <div className="mobile-menu-content">
                        <button className="close-menu-btn" onClick={closeMenu}>×</button>
                        <div className="mobile-menu-links">
                            <a className="mobile-nav-link inter-reg" href="#about" onClick={closeMenu}>About</a>
                            <a className="mobile-nav-link inter-reg" href="#skills" onClick={closeMenu}>Skills</a>
                            <a className="mobile-nav-link inter-reg" href="#projects" onClick={closeMenu}>Projects</a>
                            <a className="mobile-nav-link inter-reg" href="#contact" onClick={closeMenu}>Contact</a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;