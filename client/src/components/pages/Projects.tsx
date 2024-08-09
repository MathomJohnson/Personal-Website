import './Projects.css'

function Projects() {
    return (
        <div id="projects" data-bs-theme="dark">
            <div id="carouselExampleIndicators" className="carousel slide c">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner c-inner  active">
                    <div className="carousel-item c-item">
                        <div className="my-border d-block c-div">
                            <img src="/images/IBB.png" className="c-img" alt="..."></img>
                        </div>
                    </div>
                    <div className="carousel-item c-item">
                        <div className="my-border d-block c-div">
                            <img src="/images/IBB.png" className="c-img" alt="..."></img>
                        </div>
                    </div>
                    <div className="carousel-item c-item">
                        <div className="my-border d-block c-div">
                            <img src="/images/IBB.png" className="c-img" alt="..."></img>
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
    )
}

export default Projects;