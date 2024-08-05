import './About.css'

function About() {
    return (
        <div className="about-container">
            <div className="left-content">
                <img className="mathom-headshot" src="/images/mathom-head.png" alt="Mathom Headshot"></img>
            </div>
            <div className="about my-border">
                <h3>About Me</h3>
                <ul>
                    <li>Sophomore at UW-Madison</li>
                    <li>Computer Science Major</li>
                    <li>Interested in Machine Learning and Software Development</li>
                </ul>
            </div>
        </div>
    )
}

export default About;