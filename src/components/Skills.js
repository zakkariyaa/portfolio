import React from 'react'
import styled from 'styled-components'
import {
  SiJavascript, SiHtml5, SiCss3, SiReact, SiRedux,
  SiNodedotjs, SiExpress, SiPython, SiDjango, SiFlask, SiGithub
} from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'

const Skills = () => {
  return (
    <SkillsSection>
      <p className='border-top'></p>
      <div className='container'>
        <small id='skills'>My tech</small>
        <h2>Stack</h2>
        <div>
          <p><SiJavascript /></p>
          <p><SiHtml5 /></p>
          <p><SiCss3 /></p>
          <p><SiReact /></p>
          <p><SiRedux /></p>
          <p><SiNodedotjs /></p>
          <p><SiExpress /></p>
          <p><SiPython /></p>
          <p><SiFlask /></p>
          <p><SiDjango /></p>
          <p><SiGithub /></p>
          <p><FaGitAlt /></p>
        </div>
      </div>
    </SkillsSection>
  )
}

const SkillsSection = styled.section`
  margin-top: 5rem;
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
    div {
      margin-top: 3rem;
      font-size: 3rem;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      place-items: center;
      gap: 1.5rem;
      p {
        padding: 1rem 2rem;
        border-radius: 50%;
        border: 1px solid #d1d9e6;
        box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
      }
      p > * {
        color: #2d4cc8;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .container {
      max-width: 88%;
      div {
        grid-template-columns: repeat(3, 1fr);
        font-size: 2rem;
        p {
          padding: 0.7rem 1.6rem;
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
      div {
        grid-template-columns: repeat(3, 1fr);
        font-size: 2rem;
        gap: 0.6rem;
        p {
          font-size: 1.5rem;
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`

export default Skills