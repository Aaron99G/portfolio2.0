import React from 'react'
import "./Portfolio.css"
import Construction from "../../Assets/Construction.jpg"
import SpaceVader from "../../Assets/SpaceVader.png"
import Store from "../../Assets/Store.png"
import Mp3 from "../../Assets/Mp3.png"

const data = [
  {
    id: 1,
    image: SpaceVader,
    title: 'Space Invaderz',
    github: 'https://github.com/',
    demo: 'https://demo.com/'
  },
  {
    id: 2,
    image: Mp3,
    title: 'MP3 Player',
    github: 'https://github.com/',
    demo: 'https://demo.com/'
  },
  {
    id: 3,
    image: Store,
    title: 'Online Store',
    github: 'https://github.com/',
    demo: 'https://demo.com/'
  },
  {
    id: 4,
    image: Construction,
    title: 'Netflix Clone',
    github: 'https://github.com/',
    demo: 'https://demo.com/'
  },
]

const Portfolio = () => {
  return (
    <section>
      <h2>Projects</h2>

      <div className="container portfolio-container">
      {
        data.map(({id, image, title, github, demo}) =>{
          return (
          <article key={id} className="portfolio-item">
            <div className="portfolio-item-img">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio-item-cta">
              <a href={github} className="btn" target="_blank">Github</a>
              <a href={demo} className="btn btn-primary" target="_blank">Demo</a>
            </div>
          </article>
        )
        
       })
      }
      </div>
    </section>
  )
}

export default Portfolio