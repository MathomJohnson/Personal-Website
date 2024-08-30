import './Projects.css'

function Projects() {

    return (
        <div id="projects" className="section">
            <h1 className="inter-title">Projects</h1>
            <div id="projects-wrapper" data-bs-theme="dark">
                <div id="carouselExampleIndicators" className="carousel slide c" data-bs-touch="true">
                    <div className="carousel-indicators c-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner c-inner">
                        <div className="carousel-item c-item active">
                            <div className="my-border d-block c-div">
                                <img src="/images/IBB.png" className="c-img" alt="..."></img>
                                <p className="inter-bolder">I led the development of the Interational Badger Bonds website.</p> 
                                <ul className="inter-reg">
                                    <li>I integrated the <b>Google Caledar API</b> to allow users to schedule Google Meets with our mentors directly through the website.</li>
                                    <li>I developed <b>database models</b> to represent User and Meeting objects.</li>
                                    <li>Used Django's authentication and email modules to faciliate login/logout and emailing functionalities.</li>
                                </ul>
                                <p className="skills-p inter-reg"><b>Skills: </b>Django, MySQL, JavaScript, HTML, CSS</p>
                                <div className="button-container">
                                    <button className="resume-button inter-reg" onClick={() => window.open('https://internationalbadgerbonds.pythonanywhere.com/', '_blank')}><b>Visit Site!</b></button>
                                    <button className="resume-button inter-reg" onClick={() => window.open('https://github.com/MathomJohnson/IBB_Website', '_blank')}><b>GitHub</b></button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item c-item">
                            <div className="my-border d-block c-div">
                                <div className="vid-container">
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/jPAZ9Q0piSw?si=guIQclf3T5dfUjzg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                                <p className="inter-bolder">I wrote a Python script that texts my Canvas grades to my phone automatically.</p>
                                <ul className="inter-reg">
                                    <li>I used <b>Canvas API</b> to obtain my personal grade data.</li>
                                    <li>I used a GitHub repository called <b>PyTextNow</b> to send SMS text messages.</li>
                                    <li>I scheduled the script to run automatically using <b>Crontab</b>.</li>
                                </ul>
                                <div className="button-container">
                                    <button className="resume-button inter-reg" onClick={() => window.open('https://github.com/MathomJohnson/Canvas-Messenger', '_blank')}><b>GitHub</b></button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item c-item">
                            <div className="my-border d-block c-div">
                                <img src="/images/wordle.png" className="wordle-img" alt="Wordle Logo"></img>
                                <p className="inter-bolder">I built a Selenium script to automatically solve the daily Wordle.</p>
                                <ul className="inter-reg">
                                    <li>I used <b>Selenium</b> alongside a chromedriver to manipulate elements on the screen.</li>
                                    <li>I used a Kaggle dataset of valid Wordle words</li>
                                    <li>I was able to create an algorithm to solve the Wordle in <b>O(N)</b> time.</li>
                                </ul>
                                <div className="button-container">
                                    <button className="resume-button inter-reg" onClick={() => window.open('https://github.com/MathomJohnson/Wordle-Solver', '_blank')}><b>GitHub</b></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Projects;