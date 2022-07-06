import React from 'react'
import "./Portfolio.css"
import Construction from "../../Assets/Construction.jpg"
import SpaceVader from "../../Assets/SpaceVader.png"
import Store from "../../Assets/Store.png"
import Mp3 from "../../Assets/Mp3.png"
import Netflix from "../../Assets/Netflix.png"

const data = [
  {
    id: 1,
    image: SpaceVader,
    title: 'Space Invaderz',
    github: 'https://github.com/Aaron99G/space-invaders.git',
    demo: 'https://youtube.com/shorts/Y56STStIvHM?feature=share',
    description: 'A game inspired by the retro game series Space Invaders. Created with Python and Pygames'
  },
  {
    id: 2,
    image: Mp3,
    title: 'MP3 Player',
    github: 'https://github.com/Aaron99G/Music-Player.git',
    demo: 'https://aaron99g.github.io/Music-Player/',
    description: 'A music player created using JavaScript and Html/CSS'
  },
  {
    id: 3,
    image: Store,
    title: 'Online Store',
    github: 'https://github.com/Aaron99G/web-store.git',
    demo: 'https://web-store-rouge.vercel.app/',
    description: 'A shopping website created using JavaScript, React, Commerce JS, and Html/CSS'
  },
  {
    id: 4,
    image: Netflix,
    title: 'Netflix Clone',
    github: 'https://github.com/Aaron99G/netflix-clone.git',
    demo: 'https://portfolio2-0-kappa.vercel.app/',
    description: 'A clone of Netflix created using JavaScript, React, GraphQL, and Html/CSS'
  },
]

const Portfolio = () => {
  return (
    <section>
      <h2>Projects</h2>

      <div className="container portfolio-container">
      {
        data.map(({id, image, title, github, demo, description}) =>{
          return (
          <article key={id} className="portfolio-item">
            <div className="portfolio-item-img">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <h4>{description}</h4> <br />
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