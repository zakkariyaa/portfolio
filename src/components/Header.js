import React from 'react'
import styled from 'styled-components'
import Gif from '../assets/coding-gif.gif'

const Header = () => {
  return (
    <HeaderSection>
      <div className='container' id='header'>
        <div className='header-info'>
          <p>Hello there! I'm</p>
          <p className='name'>Zakarie</p>
          <p>
            A fullstack Software Engineer, open source contributor and history geek.
          </p>
          <a href='#contact' className='btn'>Hire Me</a>
        </div>
        <img src={Gif} alt="coding gif" />
      </div>
    </HeaderSection>
  )
}

const HeaderSection = styled.header`
  .container {
    width: 80%;
    height: 80vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .header-info {
      font-size: 1.2rem;
      .name {
        font-size: 3rem;
        color: #457b9d;
      }
    }

    .btn {
      font-size: 1rem;
      margin-top: 1rem;
      background: #1d3557;
      color: #bde0fe;
      display: inline-block;
      padding: 0.6rem 1.2rem;
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

    img {
      width: 57%;
    }
  }

  @media screen and (max-width: 1024px) {
    .container {
      width: 88%;
      flex-direction: column;
      .header-info {
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          width: 60%;
          text-align: center;
        }

        .btn {
          font-size: 1rem;
          padding: 0.4rem 1rem;
        }
      }

      img {
        width: 70%;
      }
    }
  }

  @media screen and (max-width: 600px) {
    max-width: 100%;
    .container {
      max-width: 95%;
      height: 68vh;
      gap: 2rem;
      .header-info {
        margin-top: 4rem;
        font-size: 1.2rem;
        .name {
          font-size: 1.8rem;
        }

        p {
          width: 80%;
        }
      }
    }
  }
`

export default Header
