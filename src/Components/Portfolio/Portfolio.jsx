import React from 'react'
import "./Portfolio.css"

const data = [
  {
    id: 1,
    image: 'https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_960_720.jpg',
    title: 'Space Invaderz',
    github: 'https://github.com/',
    demo: 'https://demo.com/'
  },
  {
    id: 2,
    image: 'https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_960_720.jpg',
    title: 'MP3 Player',
    github: 'https://github.com/',
    demo: 'https://demo.com/'
  },
  {
    id: 3,
    image: 'https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_960_720.jpg',
    title: 'Online Store',
    github: 'https://github.com/',
    demo: 'https://demo.com/'
  },
  {
    id: 4,
    image: 'https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_960_720.jpg',
    title: 'Netflix Clone',
    github: 'https://github.com/',
    demo: 'https://demo.com/'
  },
]

const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

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