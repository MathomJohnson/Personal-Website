import './Contact.css'

function Contact() {
    return (
        <>
        <div id="contact" className="section">
            <h1 className="inter-title">Reach Out</h1>
            <div className="contact-container">
                <button className="contact-button" onClick={() => window.location.href = 'mailto:mgjohnson8@wisc.edu?subject=Subject%20Here&body=Your%20message%20here'}>
                    <img src="/images/email.png" className="email-logo"></img>
                    <p className="inter-bold">mgjohnson8@wisc.edu</p>
                </button>
                <button className="contact-button" onClick={() => window.open('https://www.linkedin.com/in/mathomjohnson', '_blank')}>
                    <img src="/images/linkedin-logo.png" className="email-logo"></img>
                    <p className="inter-bold">LinkedIn</p>
                </button>
            {/* <img src="email.png" alt="Email Me" onClick={() => window.location.href = 'mailto:mgjohnson8@wisc.edu?subject=Subject%20Here&body=Your%20message%20here'} /> */}
            </div>
        </div>
        <div id="page-links">
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

export default Contact;