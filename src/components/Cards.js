import React from 'react'
import Card from './Card'
import designoImage from '../images/designoimage.png'
import felixtimesImage from '../images/felixtimesimage.png'
import loopstudiosImage from '../images/loopstudiosimage.png'

const Cards = () => {
    const projects = [
        {
            id: 1,
            name: "Felix Times",
            description: "Website API about News",
            technologies: [<i class="fab fa-html5 fa-2x" style={{ color: "#dc4a25" }}></i>, <i class="fab fa-css3-alt fa-2x" style={{ color: "#264bdd" }}></i>, <i class="fab fa-js fa-2x" style={{ color: "#eed71b" }} ></i>, <i class="fab fa-react fa-2x" style={{ color: "#5ed2f3" }}></i>],
            link: "https://felixhiguera.github.io/felixtimes/",
            image: felixtimesImage
        },
        {
            id: 2,
            name: "Designo",
            description: "It is a modern responsive website (7 page site).",
            technologies: [<i class="fab fa-html5 fa-2x" style={{ color: "#dc4a25" }}></i>, <i class="fab fa-css3-alt fa-2x" style={{ color: "#264bdd" }}></i>, <i class="fab fa-js fa-2x" style={{ color: "#eed71b" }} ></i>, <i class="fab fa-react fa-2x" style={{ color: "#5ed2f3" }}></i>],
            link: "https://felixhiguera.github.io/designo/#/",
            image: designoImage

        },
        {
            id: 3,
            name: "Loopstudios",
            description: "Responsive Website",
            technologies: [<i class="fab fa-html5 fa-2x" style={{ color: "#dc4a25" }}></i>, <i class="fab fa-css3-alt fa-2x" style={{ color: "#264bdd" }}></i>, <i class="fab fa-bootstrap" style={{ color: "#780ff0" }}></i>, <i class="fab fa-js fa-2x" style={{ color: "#eed71b" }} ></i>, <i class="fab fa-react fa-2x" style={{ color: "#5ed2f3" }}></i>,],
            link: "https://felixhiguera.github.io/loopstudios/",
            image: loopstudiosImage
        }
    ]
    return (
        <div className="cards">

            {projects.map(project =>
            (
                <Card key={project.link} project={project} />
            )
            )}
        </div>
    )
}

export default Cards
