import './About.css'

function About() {
    return (
        <div id="about">
            <div className="left-content">
                <img className="mathom-headshot" src="/images/mathom-head.png" alt="Mathom Headshot"></img>
            </div>
            <div className="about">
                <p className="ubuntu-light-italic">My name is:</p>
                <h1 className="ubuntu-medium">Mathom Johnson</h1>
                <p className="ubuntu-light-italic">Sophomore @ UW-Madison studying Computer Science</p>
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/mathomjohnson">
                        <img className="logo" src="/images/linkedin-logo.png" alt="LinkedIn Logo"></img>
                    </a>
                    <a href="https://github.com/MathomJohnson">
                        <img className="logo" src="/images/github-logo.png" alt="GitHub Logo"></img>
                    </a>
                    <a href="https://www.youtube.com/@MathomJohnson">
                        <img className="logo" src="/images/youtube-logo.png" alt="YouTube Logo"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;