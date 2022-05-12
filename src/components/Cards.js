import React from 'react'
import Card from './Card'
import felixtimesImage from '../images/felixtimesimage.png'
import entertainmentWebApp from '../images/entertainmentimage.png'
import audiophile from '../images/audiophile-ecommerce.png'
import redux from '../images/redux.png'

const Cards = () => {
    const projects = [
        {
            id: 1,
            name: "Audiophile",
            description: "It is a modern e-commerce responsive website  using React and Redux (state management).",
            technologies: [<i class="fab fa-html5 fa-2x" style={{ color: "#dc4a25" }}></i>, <i class="fab fa-css3-alt fa-2x" style={{ color: "#264bdd" }}></i>, <i class="fab fa-js fa-2x" style={{ color: "#eed71b" }} ></i>, <i class="fab fa-react fa-2x" style={{ color: "#5ed2f3" }}></i>, <img src={redux} className="redux-format" alt="" />],
            link: "https://res.cloudinary.com/dkctajvtu/image/upload/v1652385102/kumxyfajtlb9ncnypljn.png",
            image: audiophile

        },

        {
            id: 2,
            name: "Feflix ",
            description: "Multi-page entertainment web app using JSON data, routing, state management, and search functionality.",
            technologies: [<i class="fab fa-html5 fa-2x" style={{ color: "#dc4a25" }}></i>, <i class="fab fa-css3-alt fa-2x" style={{ color: "#264bdd" }}></i>, <i class="fab fa-js fa-2x" style={{ color: "#eed71b" }} ></i>, <i class="fab fa-react fa-2x" style={{ color: "#5ed2f3" }}></i>,],
            link: "https://res.cloudinary.com/dkctajvtu/image/upload/v1652385083/ckzke69ogwrk4o3tp7du.png",
            image: entertainmentWebApp
        },
        {
            id: 3,
            name: "Felix Times",
            description: "Website API about News working with fetchAPI.",
            technologies: [<i class="fab fa-html5 fa-2x" style={{ color: "#dc4a25" }}></i>, <i class="fab fa-css3-alt fa-2x" style={{ color: "#264bdd" }}></i>, <i class="fab fa-js fa-2x" style={{ color: "#eed71b" }} ></i>, <i class="fab fa-react fa-2x" style={{ color: "#5ed2f3" }}></i>],
            link: "https://res.cloudinary.com/dkctajvtu/image/upload/v1652384980/re51dftslut2grb04nbl.png",
            image: felixtimesImage

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
