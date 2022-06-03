import React from 'react'
import styled from 'styled-components'

import Img1 from '../assets/project4.png'
import Img2 from '../assets/project2.png'
import Img3 from '../assets/project3.png'
import Img4 from '../assets/project1.png'
import Img5 from '../assets/project6.png'
import Img6 from '../assets/project8.png'


const Projects = () => {
  return (
    <ProjectsSection>
      <p className='border-top'></p>
      <div className="container">
        <small id='projects'>My Recent</small>
        <h2>Projects</h2>

        <div className="projects_conatiner">

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={Img1} alt="project one" />
            </div>
            <h3>Gif Maker</h3>
            <div className='portfolio__item-cta'>
              <a className='btn' href="https://github.com/zakkariyaa/gif-maker">Github</a>
              <a className='btn btn-primary' href="https://gifyvideo.netlify.app/">Live Demo</a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={Img2} alt="project one" />
            </div>
            <h3>Somali Poetry Directory</h3>
            <div className='portfolio__item-cta'>
              <a className='btn' href="https://github.com/zakkariyaa/suugaan">Github</a>
              <a className='btn btn-primary' href="https://murti.netlify.app/">Live Demo</a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={Img3} alt="project one" />
            </div>
            <h3>Tesla Clone</h3>
            <div className='portfolio__item-cta'>
              <a className='btn' href="https://github.com/zakkariyaa/tesla-clone">Github</a>
              <a className='btn btn-primary' href="https://app-tesla-clone.netlify.app/">Live Demo</a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={Img4} alt="project one" />
            </div>
            <h3>Tenzies Game</h3>
            <div className='portfolio__item-cta'>
              <a className='btn' href="https://github.com/zakkariyaa/tenzies-game">Github</a>
              <a className='btn btn-primary' href="https://tenzies-dice.netlify.app/">Live Demo</a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={Img5} alt="project one" />
            </div>
            <h3>Video to Audio Converter</h3>
            <div className='portfolio__item-cta'>
              <a className='btn' href="https://github.com/zakkariyaa/video-converter">Github</a>
              <a className='btn btn-primary' href="https://video-converterr.netlify.app/">Live Demo</a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={Img6} alt="project one" />
            </div>
            <h3>Personal Portfolio</h3>
            <div className='portfolio__item-cta'>
              <a className='btn' href="google.com">Github</a>
              <a className='btn btn-primary' href="google.com">Live Demo</a>
            </div>
          </article>

        </div>

        <div className='view_more'>
          <button>View More</button>
        </div>
      </div>
    </ProjectsSection>
  )
}

const ProjectsSection = styled.section`
  margin-top: 6rem;
  .border-top {
    text-align: center;
    width: 60%;
    border: 1px solid gray;
    margin: 1rem auto;
  }

  .container {
    width: 80%;
    margin: 4rem auto 0;

    .projects_conatiner {
      margin-top: 3rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;

      .portfolio__item {
        background: #edf2f4;
        padding: 1.3rem;
        border: 1px solid #03045e;
        border-radius: 2rem;
        transition: all 400ms ease;
        :hover {
          background: transparent;
          border: 1px solid #03045e;
        }
        .portfolio__item-image {
          img {
            width: 100%;
            height: 15rem;
          }
          border-radius: 1.5rem;
          overflow: hidden;
        }

        h3 {
          text-align: center;
          color: #370617;
          margin: 1.2rem 0 0.5rem;
        }

        .portfolio__item-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 1rem;
          .btn {
            font-size: 1.2rem;
            margin-top: 1.5rem;
            color: #219ebc;
            background: transparent;
            border: 1px solid #023047;
            display: inline-block;
            padding: 0.8rem 1.6rem;
            margin-right: 0.6rem;
            width: fit-content;
            cursor: pointer;
            transition: all 400ms ease;
            border-radius: 0.4rem;
            :hover {
              background: transparent;
              color: #1d3557;
              border-color: #1d3557;
            }
          }
          .btn-primary {
            background: #1d3557;
            color: #bde0fe;
          }
        }
      }
    }

    small {
      display: block;
      text-align: center;
      color: #03045e;
      font-size: 1.2rem;
    }
    h2 {
      text-align: center;
      font-size: 2rem;
      color: #457b9d;
    }

    .view_more {
      margin: 3rem 0;
      text-align: center;
      button {
        background-color: #dbe9f7;
        color: #5E6C84;
        font-weight: 600;
        letter-spacing: 2px;
        text-transform: uppercase;
        padding: 1rem 2.9rem;
        width: fit-content;
        font-size: 1.2rem;
        border-radius: 0.6rem;
        box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.1);
        cursor: pointer;
        transition: all 400ms ease;
        :hover {
          background: transparent;
          border: 1px solid #5E6C84;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .container {
      width: 88%;
      .projects_conatiner {
        grid-template-columns: 1fr 1fr;
        .portfolio__item {
          padding: 1rem;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    max-width: 100%;
    .container {
      max-width: 95%;
      small {
        font-size: 0.9rem;
      }
      h2 {
        font-size: 1.5rem;
      }
      .projects_conatiner {
        grid-template-columns: 1fr;
        gap: 1rem;
        place-items: center;
        .portfolio__item {
          width: 84%;
          padding: 0.7rem;
          border-radius: 1.2rem;
          .portfolio__item-image {
            img {
              width: 100%;
              height: 15rem;
            }
            border-radius: 1.5rem;
            overflow: auto;
          }

          h3 {
            margin: 0.5rem 0 0.4rem;
          }

          .portfolio__item-cta {
            .btn {
              font-size: 1rem;
              padding: 0.4rem 0.9rem;
            }
          }
        }
      }

      .view_more {
        margin: 1.5rem 0;
        button {
          font-size: 1rem;
          letter-spacing: 1;
          padding: 0.7rem 1rem;
        }
      }
    }
  }
`

export default Projects