import './About.css'
import { useEffect, useState } from 'react';

// Define the User type
interface Course {
    name: string;
    grade: number;
    // Add other properties if needed
}

function About() {

    const [courses, setCourses] = useState<Course[]>([]);
    const [error, setError] = useState("");
    const [semester, setSemester] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/fake-users")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json(); // Parse JSON from the response
            })
            .then(data => {
                setCourses(data); // Store the data in state
            })
            .catch(() => {
                setError('Error loading course data.');
            });
    }, []);

    //Figure out what semester it is currently
    useEffect(() => {
        const now = new Date();
        if (now.getMonth() > 6) {
            setSemester("Fall, " + now.getFullYear());
        } else {
            setSemester("Spring, " + now.getFullYear());
        }
    }, []);

    return (
        <div id="about">
            <h2 className="ubuntu-medium">Get To Know Me</h2>
            <div id="about-container">
                <div className="edu-and-interests">
                    <div className="education-container my-border">
                        <div className="education">
                            <img className="mortarboard-logo" src="/images/mortarboard.png"></img>
                            <h3 className="ubuntu-light-italic">Education</h3>
                        </div>
                        <div className="education-desc">
                            <p className="ubuntu-light-italic">
                                Pursuing a B.S. in Computer Science @ UW-Madison
                            </p>
                        </div>
                    </div>
                    <div className="interests-container my-border">
                        <div className="interests">
                            <img className="magnifying-logo" src="/images/magnifying-glass.png"></img>
                            <h3 className="ubuntu-regular">Interests</h3>
                        </div>
                        <div className="interests-desc">
                            <p className="ubuntu-light-italic">
                                Full Stack Development, Machine Learning, Internet Of Things, Applied Math
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grand-canyon">
                    <img className="gc-pic" src="/images/grand-canyon.png" alt="Grand Canyon"></img>
                </div>
            </div>
            <p className="ubuntu-light-italic about-me">
                My name is Mathom Johnson and I'm a sophomore studying Computer Science at the University of Wisconsin-Madison.
                Currently, I am working as a mentor and web developer for a student startup here in Madison called "International Badger Bonds".
                Our goal is to connect incoming international students with student mentors who can provide assistance while they settle into a new environment.
                Over the summer I got to meet with countless students from all over the world. Outside of school I am studying Machine Learning through 
                Coursera and YouTube. I love to apply math to real-world problems that Machine Learning aims to solve.
            </p>
            <div className="canvas-parent">
                <div className="canvas canvas-border">
                    <div className="canvas-inside-container">
                        <img src="/images/bascom.png" className="bascom-pic"></img>
                        <div className="class-info">
                            <h3 className="ubuntu-regular">My classes for {semester}</h3>
                            <ul>
                            {
                                courses.map(course => {
                                    return <li className="ubuntu-light">{course.name} ({course.grade})</li>
                                })
                            }
                            </ul>
                        </div>
                    </div>
                    <p>Powered with <span className="red-text"><b>Canvas</b></span></p>
                </div>
            </div>
        </div>
    )
}

export default About;