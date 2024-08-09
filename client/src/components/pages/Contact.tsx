import './Contact.css'

function Contact() {
    return (
        <div id="contact">
            <h1>Reach Out</h1>
            <div className="contact-container">
                <button className="contact-button" onClick={() => window.location.href = 'mailto:mgjohnson8@wisc.edu?subject=Subject%20Here&body=Your%20message%20here'}>
                    <img src="/images/email.png" className="email-logo"></img>
                    <p>mgjohnson8@wisc.edu</p>
                </button>
                <button className="contact-button" onClick={() => window.open('https://www.linkedin.com/in/mathomjohnson', '_blank')}>
                    <img src="/images/linkedin-logo.png" className="email-logo"></img>
                    <p>LinkedIn</p>
                </button>
            {/* <img src="email.png" alt="Email Me" onClick={() => window.location.href = 'mailto:mgjohnson8@wisc.edu?subject=Subject%20Here&body=Your%20message%20here'} /> */}
            </div>
        </div>
    )
}

export default Contact;