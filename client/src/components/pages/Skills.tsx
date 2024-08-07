import "./Skills.css"

function Skills() {

    return (
        <div id="skills">
            <h1>Skills</h1>
            <div className="languages my-border">
                <div className="python-wrapper">
                    <img src="/images/python-logo.png" className="python-logo"></img>
                    <p className="py-text"><b>Python</b></p>
                </div>
                <div className="python-wrapper">
                    <img src="/images/typescript.png" className="python-logo"></img>
                    <p className="py-text"><b>TypeScript</b></p>
                </div>
                <div className="python-wrapper">
                    <img src="/images/java.png" className="python-logo"></img>
                    <p className="py-text"><b>Java</b></p>
                </div>
                <div className="python-wrapper">
                    <img src="/images/html.png" className="python-logo smaller-logo"></img>
                    <p className="py-text"><b>HTML</b></p>
                </div>
                <div className="python-wrapper">
                    <img src="/images/image.png" className="python-logo smaller-logo"></img>
                    <p className="py-text"><b>JavaScript</b></p>
                </div>
            </div>
        </div>
    )
}

export default Skills;