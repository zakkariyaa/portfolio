import React from 'react';
import styled from 'styled-components';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from 'react-icons/ai';

import coderImg from '../assets/coder.png';

const About = ({ isDarkMode }) => {
  return (
    <AboutSection isDarkMode={isDarkMode}>
      <p className="border-top" id="about"></p>
      <div className="container">
        <small>A little</small>
        <h2>About Me</h2>

        <div className="info">
          <img src={coderImg} alt="drawing of a programmer" />
          <div className="about_details">
            <p>
              My name is <strong>Zakarie Yaris</strong>, i am a Software
              Engineer from London. My background is in Medicine but i have been
              coding for over year now. So you can say i enjoy fixing computer
              bugs more than human ones!
            </p>
            <p>
              Main two languages i use daily and love are
              <strong>Javascript</strong> and
              <strong> Python</strong>. Lately, i mostly build Fullstack web and
              mobile applications using Javascript based stack.
            </p>
            <a href="#projects" className="btn">
              Check Portfolio
            </a>
            <a href="#contact" className="btn">
              Request CV
            </a>
          </div>
        </div>

        <div className="about_socials">
          <a href="https://www.linkedin.com/in/zakarie-yaris/">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/zakkariyaa">
            <AiFillGithub />
          </a>
          <a href="https://twitter.com/zakaariyee">
            <AiOutlineTwitter />
          </a>
          <a href="https://www.instagram.com/?hl=en">
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding-top: 2rem;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#1d3557' : '#edf2f4')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#edf2f4' : '#1d3557')};
  .border-top {
    text-align: center;
    width: 60%;
    border: 1px solid #219ebc;
    margin: 1rem auto;
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

    .info {
      display: flex;
      gap: 5rem;
      align-items: center;
      p {
        font-size: 1.1rem;
        line-height: 1.9;
        width: 100%;
      }
      p + p {
        margin-top: 2rem;
      }
      .btn {
        font-size: 1rem;
        margin-top: 1.5rem;
        background: #2a9d8f;
        color: #edf2f4;
        display: inline-block;
        padding: 0.5rem 1.1rem;
        margin-right: 0.6rem;
        width: fit-content;
        border: 1px solid transparent;
        cursor: pointer;
        transition: var(--transition);
        border-radius: 0.4rem;
        :hover {
          background: transparent;
          color: ${({ isDarkMode }) => (isDarkMode ? '#edf2f4' : '#1d3557')};
          border-color: #2a9d8f;
        }
      }

      .btn + .btn {
        color: ${({ isDarkMode }) => (isDarkMode ? '#edf2f4' : '#219ebc')};
        background: transparent;
        border: 1px solid #2a9d8f;
      }
    }

    .about_socials {
      margin-top: 3rem;
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      a {
        font-size: 1.5rem;
        color: ${({ isDarkMode }) => (isDarkMode ? '#edf6f9' : '#457b9d')};
        :hover {
          color: ${({ isDarkMode }) => (isDarkMode ? '#caf0f8' : '#000')};
        }
      }
      ::after,
      ::before {
        content: '';
        width: 6rem;
        height: 2px;
        background: ${({ isDarkMode }) => (isDarkMode ? '#edf2f4' : '#1d3557')};
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .border-top {
      width: 40%;
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
        justify-content: center;
        gap: 3rem;
        margin-top: 6rem;
        ::after,
        ::before {
          width: 3rem;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-top: 4rem;
    .container {
      margin-top: 0;
      width: 100%;
      font-size: 1rem;
      small {
        font-size: 0.8rem;
      }
      h2 {
        font-size: 1.3rem;
      }
      .info {
        .about_details {
          padding: 0 1rem;
          p {
            width: 100%;
            font-size: 1rem;
          }
          .btn {
            font-size: 1rem;
            padding: 0.3rem 0.6rem;
            width: 9rem;
          }
        }
      }

      .about_socials {
        justify-content: center;
        gap: 1rem;
        a {
          font-size: 1.5rem;
        }
        ::after,
        ::before {
          width: 2rem;
        }
      }
    }
  }
`;

export default About;
