import React from 'react';
import styled from 'styled-components';
import laptopImg from '../assets/laptop.png';

const Header = ({ isDarkMode }) => {
  return (
    <HeaderSection isDarkMode={isDarkMode}>
      <div className="container" id="header">
        <div className="header-info">
          <p>Hello there! I'm</p>
          <p className="name">Zakarie</p>
          <p>
            Welcome to my portfolio website. I am a fullstack engineer Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Placeat, eius.
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <a href="#contact" className="btn">
            Hire Me
          </a>
        </div>
        <img src={laptopImg} alt="coding gif" />
      </div>
    </HeaderSection>
  );
};

const HeaderSection = styled.header`
  padding-top: 2rem;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#1d3557' : '#edf2f4')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#edf2f4' : '#1d3557')};

  .container {
    width: 80%;
    height: 80vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .header-info {
      font-size: 1.1rem;
      .name {
        font-size: 3rem;
        color: ${({ isDarkMode }) => (isDarkMode ? '#48cae4' : '#023e8a')};
      }
    }

    .btn {
      font-size: 1rem;
      margin-top: 2rem;
      background: #2a9d8f;
      color: #edf2f4;
      display: inline-block;
      padding: 0.4rem 1rem;
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

    img {
      width: 57%;
    }
  }

  @media screen and (max-width: 1024px) {
    .container {
      height: 40vh;
      width: 92%;
      gap: 1rem;
      .header-info {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        p {
          width: 100%;
        }

        .btn {
          font-size: 1rem;
          padding: 0.2rem 0.7rem;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    padding-top: 0;
    .container {
      padding: 0 1rem;
      text-align: center;
      width: 100%;
      height: 50vh;
      .header-info {
        margin-top: 0;
        font-size: 1.1rem;
        .name {
          font-size: 1.8rem;
        }

        p {
          font-size: 1rem;
          line-height: 2.4rem;
          width: 100%;
        }

        .btn {
          margin: 1rem auto 0;
        }
      }
    }

    img {
      display: none;
    }
  }
`;

export default Header;
