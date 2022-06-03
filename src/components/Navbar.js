import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Nav>
      <div className='container'>
        <h2>Zakarie</h2>
        <div className='right_navbar'>
          <a href="#header">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contacts</a>
        </div>
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  border-radius: 0 0 2rem 2rem;
  background-color: #edf2f4;
  font-weight: 500;
  color: #1d3557;
  box-shadow: 0 1.5rem 1.5rem rgba(36, 0, 64, 0.2);
  .container {
    font-size: 1.3rem;
    width: 80%;
    height: 5rem;
    margin:  auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-family: 'Philosopher', sans-serif;
    }

    .right_navbar {
      display: flex;
      gap: 1rem;
      a {
        position: relative;
        color: inherit;
        ::after {
          content: '';
          height: 2px;
          background-color: black;
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          opacity: 0;
          transform: scaleX(0);
          transition: all 400ms ease;
        }

        :hover {
          ::after {
            opacity: 1;
            transform: scaleX(1);
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    border-radius: 0;
    .container {
      width: 88%;
      margin: 0;
      h2 {
        margin-left: 2rem;
      }
    }
  }

  @media screen and (max-width: 600px) {
    max-width: 0;
    display: none;
  }
`

export default Navbar