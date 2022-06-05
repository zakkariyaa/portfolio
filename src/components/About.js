import React from 'react'
import styled from 'styled-components'
import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

import Developer from '../assets/developer.gif'

const About = () => {
  return (
    <AboutSection>
      <p className='border-top' id='about'></p>
      <div className='container'>
        <small>A little</small>
        <h2>About Me</h2>

        <div className='info'>
          <img src={Developer} alt="" />
          <div className='about_details'>
            <p>My name is <strong>Zakarie Yaris</strong>, i am 24 years old Software Engineer from London.
              My background is in Medicine but i have been coding for over year now.
              So you can say i enjoy fixing computer bugs more than human ones!
            </p>
            <p>Main two languages i use daily and love are <strong>Javascript</strong> and
              <strong> Python</strong>. Lately, i mostly build Fullstack web applications using
              Javascript based stack.
            </p>
            <a href='#projects' className='btn'>Check Portfolio</a>
            <a href='#contact' className='btn'>Request CV</a>
          </div>
        </div>

        <div className='about_socials'>
          <a href="https://www.linkedin.com/in/zakarie-yaris/"><AiFillLinkedin /></a>
          <a href="https://github.com/zakkariyaa"><AiFillGithub /></a>
          <a href="https://twitter.com/zakaariyee"><AiOutlineTwitter /></a>
          <a href="https://www.instagram.com/?hl=en"><AiOutlineInstagram /></a>
        </div>
      </div>
    </AboutSection>
  )
}

const AboutSection = styled.section`
  margin-top: 2rem;
  .border-top {
    text-align: center;
    width: 60%;
    border: 1px solid gray;
    margin: 1rem auto;
  }
  .container {
    width: 80%;
    margin: 3rem auto 0;
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

    .info {
      display: flex;
      gap: 4rem;
      align-items: center;
      p {
        font-size: 1.4rem;
        line-height: 1.9;
        width: 100%;
        margin-top: 2rem;
      }
      .btn {
        font-size: 1.2rem;
        margin-top: 1.5rem;
        background: #1d3557;
        color: #bde0fe;
        display: inline-block;
        padding: 0.8rem 1.6rem;
        margin-right: 0.6rem;
        width: fit-content;
        border: 1px solid transparent;
        cursor: pointer;
        transition: var(--transition);
        border-radius: 0.4rem;
        :hover {
          background: transparent;
          color: #1d3557;
          border-color: #1d3557;
        }
      }

      .btn + .btn {
        color: #219ebc;
        background: transparent;
        border: 1px solid #023047;
      }
    }

    .about_socials {
      margin-top: 3rem;
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      a {
        font-size: 1.7rem;
        color: #457b9d;
        :hover {
          color: black;
        }
      }
      ::after, ::before {
        content: '';
        width: 6rem;
        height: 2px;
        background: #1d3557;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .border-top {
      margin-top: 0;
    }
    .container {
      width: 88%;
      .info {
        flex-direction: column;
        img {
          display: none;
        }
        .about_details {
          display: grid;
          grid-template-columns: 1fr;
          place-items: center;
          p {
            text-align: center;
            width: 85%;
            line-height: 2.3;
          }

          .btn {
            width: 13rem;
          }
        }
      }
      .about_socials {
        justify-content: space-around;
        margin-top: 6rem;
        ::after, ::before {
          width: 3rem;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    max-width: 100%;
    margin-top: 4rem;
    .container {
      max-width: 95%;
      font-size: 1rem;
      small {
        font-size: 0.9rem;
      }
      h2 {
        font-size: 1.5rem;
      }
      .info {
        .about_details {
          p {
            width: 88%;
            font-size: 1rem;
          }
          .btn {
            font-size: 1rem;
            padding: 0.4rem 1rem;
            width: 10rem;
          }
        }
      }

      .about_socials {
        justify-content: space-around;
        a {
          font-size: 1.5rem;
        }
        ::after, ::before {
          width: 2rem;
        }
      }
    }
  }
`

export default About