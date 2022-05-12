import React from 'react'

const Card = ({ project }) => {
    const { name, description, technologies, link, image } = project
    console.log('hola')
    return (
        <div className="card">
            <div className="card-text">
                <h2>{name}</h2>
                <p>{description}</p>
                <p className="format-technologies">{technologies}</p>

                <a href={link} target="_blank"><span>Website</span></a>

            </div>

            <div className="card-image">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default Card
