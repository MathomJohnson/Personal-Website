import "./Skills.css"

function Skills() {

    return (
        <div id="skills" className="section">
            <h1 className="inter-title">Skills</h1>
            <div className="skill-container">
                <div className="languages my-border">
                    <h2 className="inter-bold">General Languages</h2>
                    <ul className="custom-bullets inter-bold">
                        <li>Python</li>
                        <li>Java</li>
                        <li>TypeScript</li>
                        <li>JavaScript</li>
                        <li>SQL</li>
                        <li>C</li>
                        <li>Bash</li>
                        <li>Assembly</li>
                    </ul>
                </div>
                <div className="languages my-border">
                    <h2 className="inter-bold">Libraries & Tools</h2>
                    <ul className="custom-bullets inter-bold">
                        <li>ScikitLearn</li>
                        <li>Git</li>
                        <li>Pandas</li>
                        <li>NumPy</li>
                        <li>Selenium</li>
                        <li>BeautifulSoup</li>
                        <li>SQLite</li>
                    </ul>
                </div>
                <div className="languages my-border">
                    <h2 className="inter-bold">Fullstack Technologies</h2>
                    <ul className="custom-bullets inter-bold">
                        <li>ReactJS</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>Django</li>
                        <li>Flask</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>MySQL</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;