import './Intro.css'

function Intro() {
    return (
        <div id="intro">
            <div id="intro-container">
                <div className="left-content">
                    <img className="mathom-headshot" src="/images/mathom-head.png" alt="Mathom Headshot"></img>
                </div>
                <div className="intro">
                    {/* <p className="inter-reg">My name is:</p> */}
                    <h1 className="inter-bold">Mathom Johnson</h1>
                    <p className="inter-reg">Sophomore @ UW-Madison studying CS & DS</p>
                    <button className="wendy-one-regular resume-button" onClick={() => window.open('/MathomResume.pdf', '_blank')}>Resume</button>
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
        </div>
    )
}

export default Intro;