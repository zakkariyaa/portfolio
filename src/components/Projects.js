import React, { useState } from 'react';
import styled from 'styled-components';

import Img1 from '../assets/gif.png';
import Img2 from '../assets/murti.png';
import Img3 from '../assets/tesla.png';
import Img4 from '../assets/tenzies.png';
import Img5 from '../assets/audio.png';
import Img6 from '../assets/portfolio-html.png';
import Img7 from '../assets/restuarent.png';
import Img8 from '../assets/portfolio-react.png';
import Img9 from '../assets/salon.png';

const Projects = ({ isDarkMode }) => {
  const [moreProjects, setMoreProjects] = useState(false);

  const handleMoreProjects = () => setMoreProjects((prevValue) => !prevValue);

  return (
    <ProjectsSection isDarkMode={isDarkMode}>
      <p className="border-top"></p>
      <div className="container">
        <small id="projects">My Recent</small>
        <h2>Projects</h2>

        <div className="projects_conatiner">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={Img1} alt="project one" />
            </div>
            <h3>Gif Maker</h3>
            <div className="portfolio__item-cta">
              <a className="btn" href="https://github.com/zakkariyaa/gif-maker">
                Github
              </a>
              <a
                className="btn btn-primary"
                href="https://gifyvideo.netlify.app/"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={Img2} alt="project one" />
            </div>
            <h3>Somali Poetry</h3>
            <div className="portfolio__item-cta">
              <a className="btn" href="https://github.com/zakkariyaa/suugaan">
                Github
              </a>
              <a className="btn btn-primary" href="https://murti.netlify.app/">
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={Img3} alt="project one" />
            </div>
            <h3>Tesla Clone</h3>
            <div className="portfolio__item-cta">
              <a
                className="btn"
                href="https://github.com/zakkariyaa/tesla-clone"
              >
                Github
              </a>
              <a
                className="btn btn-primary"
                href="https://app-tesla-clone.netlify.app/"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={Img4} alt="project one" />
            </div>
            <h3>Tenzies Game</h3>
            <div className="portfolio__item-cta">
              <a
                className="btn"
                href="https://github.com/zakkariyaa/tenzies-game"
              >
                Github
              </a>
              <a
                className="btn btn-primary"
                href="https://tenzies-dice.netlify.app/"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={Img5} alt="project one" />
            </div>
            <h3>Video to Audio Converter</h3>
            <div className="portfolio__item-cta">
              <a
                className="btn"
                href="https://github.com/zakkariyaa/video-converter"
              >
                Github
              </a>
              <a
                className="btn btn-primary"
                href="https://video-converterr.netlify.app/"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={Img6} alt="project one" />
            </div>
            <h3>Personal Portfolio</h3>
            <div className="portfolio__item-cta">
              <a
                className="btn"
                href="https://github.com/zakkariyaa/responsive-portfolio"
              >
                Github
              </a>
              <a
                className="btn btn-primary"
                href="https://zakariya.me/responsive-portfolio/"
              >
                Live Demo
              </a>
            </div>
          </article>

          {moreProjects && (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={Img7} alt="project one" />
              </div>
              <h3>Restuarent Website</h3>
              <div className="portfolio__item-cta">
                <a className="btn" href="https://github.com/zakkariyaa">
                  Github
                </a>
                <a
                  className="btn btn-primary"
                  href="https://github.com/zakkariyaa"
                >
                  Live Demo
                </a>
              </div>
            </article>
          )}

          {moreProjects && (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={Img8} alt="project one" />
              </div>
              <h3>Current Portfolio (React)</h3>
              <div className="portfolio__item-cta">
                <a
                  className="btn"
                  href="https://github.com/zakkariyaa/zakkariyaa.github.io"
                >
                  Github
                </a>
                <a className="btn btn-primary" href="https://zakariya.me/">
                  Live Demo
                </a>
              </div>
            </article>
          )}

          {moreProjects && (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={Img9} alt="project one" />
              </div>
              <h3>Modern Salon Website</h3>
              <div className="portfolio__item-cta">
                <a className="btn" href="https://github.com/zakkariyaa">
                  Github
                </a>
                <a
                  className="btn btn-primary"
                  href="https://github.com/zakkariyaa"
                >
                  Live Demo
                </a>
              </div>
            </article>
          )}
        </div>

        <div className="view_more">
          <button onClick={handleMoreProjects}>
            {moreProjects ? 'View Less' : 'View More'}
          </button>
        </div>
      </div>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  padding-top: 6rem;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#1d3557' : '#edf2f4')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#edf2f4' : '#1d3557')};

  .border-top {
    text-align: center;
    width: 60%;
    border: 0.7px solid #219ebc;
    background: #219ebc;
    margin: 1rem auto 0;
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
        background: ${({ isDarkMode }) => (isDarkMode ? '#172a46' : '#e8f7fa')};
        padding: 1.1rem;
        border: 1px solid #172a46;
        border-radius: 1.4rem;
        transition: all 400ms ease;
        :hover {
          background: transparent;
          border: 1px solid #219ebc;
        }
        .portfolio__item-image {
          img {
            width: 100%;
            height: 15rem;
          }
          border-radius: 1rem;
          overflow: hidden;
        }

        h3 {
          font-size: 1rem;
          text-align: center;
          color: ${({ isDarkMode }) => (isDarkMode ? '#edf6f9' : '#370617')};
          margin: 1rem 0 0;
        }

        .portfolio__item-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 1rem;
          .btn {
            font-size: 1rem;
            margin-top: 1.5rem;
            color: ${({ isDarkMode }) => (isDarkMode ? '#edf2f4' : '#219ebc')};
            background: transparent;
            border: 1px solid #2a9d8f;
            display: inline-block;
            padding: 0.4rem 0.8rem;
            width: fit-content;
            cursor: pointer;
            transition: all 400ms ease;
            border-radius: 0.4rem;
            :hover {
              background: transparent;
              color: ${({ isDarkMode }) =>
                isDarkMode ? '#edf2f4' : '#1d3557'};
              border-color: #2a9d8f;
            }
          }
          .btn-primary {
            background: #2a9d8f;
            color: #edf2f4;
          }
        }
      }
    }

    small {
      display: block;
      text-align: center;
      color: ${({ isDarkMode }) => (isDarkMode ? '#edf2f4' : '#03045e')};
      font-size: 1rem;
    }
    h2 {
      text-align: center;
      font-size: 1.7rem;
      color: ${({ isDarkMode }) => (isDarkMode ? '#edf6f9' : '#457b9d')};
    }

    .view_more {
      margin: 3rem 0 0;
      text-align: center;
      button {
        background-color: #219ebc;
        color: #edf2f4;
        font-weight: 600;
        letter-spacing: 2px;
        text-transform: uppercase;
        padding: 0.8rem 2.1rem;
        width: fit-content;
        font-size: 1.1rem;
        border-radius: 0.6rem;
        cursor: pointer;
        transition: all 400ms ease;
        :hover {
          background: transparent;
          color: ${({ isDarkMode }) => (isDarkMode ? '#edf6f9' : '#172a46')};
          border: 1px solid #2a9d8f;
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
    width: 100%;
    padding-top: 3rem;

    .container {
      width: 95%;
      margin-top: 1rem;
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
          border-radius: 1rem;
          .portfolio__item-image {
            img {
              width: 100%;
              height: 15rem;
            }
            border-radius: 1rem;
            overflow: auto;
          }

          h3 {
            margin: 0.5rem 0 0.4rem;
          }

          .portfolio__item-cta {
            margin-bottom: 0.4rem;
            .btn {
              margin-top: 0.5rem;
              font-size: 1rem;
              padding: 0.4rem 0.9rem;
              margin-bottom: 0;
            }
          }
        }
      }

      .view_more {
        button {
          font-size: 1rem;
          letter-spacing: 0.5;
          padding: 0.5rem 0.8rem;
          margin-bottom: 1rem;
        }
      }
    }
  }
`;

export default Projects;
