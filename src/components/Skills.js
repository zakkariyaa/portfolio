import React from 'react';
import styled from 'styled-components';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiFlask,
  SiGithub,
} from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';

const Skills = ({ isDarkMode }) => {
  return (
    <SkillsSection isDarkMode={isDarkMode}>
      <p className="border-top"></p>
      <div className="container">
        <small id="skills">My tech</small>
        <h2>Stack</h2>
        <div>
          <p>
            <SiJavascript />
          </p>
          <p>
            <SiHtml5 />
          </p>
          <p>
            <SiCss3 />
          </p>
          <p>
            <SiReact />
          </p>
          <p>
            <SiRedux />
          </p>
          <p>
            <SiNodedotjs />
          </p>
          <p>
            <SiExpress />
          </p>
          <p>
            <SiPython />
          </p>
          <p>
            <SiFlask />
          </p>
          <p>
            <SiDjango />
          </p>
          <p>
            <SiGithub />
          </p>
          <p>
            <FaGitAlt />
          </p>
        </div>
      </div>
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
  padding-top: 5rem;
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
    margin: 3rem auto 0;
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
    div {
      margin-top: 3rem;
      font-size: 1.7rem;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      place-items: center;
      gap: 2rem;
      p {
        padding: 0.9rem 1.4rem;
        border-radius: 50%;
        border: 1px solid #d1d9e6;
        box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
      }
      p > * {
        color: ${({ isDarkMode }) => (isDarkMode ? '#2a9d8f' : '#2d4cc8')};
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .border-top {
      width: 40%;
    }
    .container {
      width: 95%;
      div {
        grid-template-columns: repeat(4, 1fr);
        justify-content: space-evenly;
        font-size: 1.3rem;
        p {
          padding: 0.5rem 1.2rem;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    padding-top: 3rem;
    padding-bottom: 1rem;

    .container {
      width: 100%;
      margin-top: 1rem;
      small {
        font-size: 0.9rem;
      }
      h2 {
        font-size: 1.5rem;
      }
      div {
        grid-template-columns: repeat(3, 1fr);
        font-size: 2rem;
        gap: 1rem;
        p {
          font-size: 1.3rem;
          padding: 0.3rem 0.7rem;
        }
      }
    }
  }
`;

export default Skills;
