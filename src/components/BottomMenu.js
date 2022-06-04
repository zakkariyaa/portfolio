import React, { useState } from 'react'
import styled from 'styled-components'

import { AiFillHome } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import { BiComment } from 'react-icons/bi'
import { VscOutput } from 'react-icons/vsc'

const BottomMenu = () => {
  const [active, setActive] = useState('header')

  return (
    <Menu>
      <a href="#about" onClick={() => setActive('about')}>
        <FaUserAlt className={active === 'about' ? 'active' : ''} />
      </a>
      <a href="#skills" onClick={() => setActive('skills')}>
        <BiCodeAlt className={active === 'skills' ? 'active' : ''} />
      </a>
      <a href="#header" onClick={() => setActive('header')}>
        <AiFillHome className={active === 'header' ? 'active' : ''} />
      </a>
      <a href="#projects" onClick={() => setActive('projects')}>
        <VscOutput className={active === 'projects' ? 'active' : ''} />
      </a>
      <a href="#contact" onClick={() => setActive('contact')}>
        <BiComment className={active === 'contact' ? 'active' : ''} />
      </a>
    </Menu>
  )
}

const Menu = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background-color: aliceblue;
  box-shadow: 1.5rem 0.5rem 1.5rem 0.5rem rgba(36, 0, 64, 0.2);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  * {
    font-size: 2rem;
    color: #1d3557;
  }

  display: none;

  @media screen and (max-width: 600px) {
    max-width: 100%;
    display: flex;
    padding: 1.4rem;
    height: 4rem;
    * {
      font-size: 1rem;
    }

    .active {
      border-radius: 50%;
      padding: 0.5rem;
      background-color: white;
      font-size: 2.6rem;
      color: #2d4cc8;
    }
  }
`

export default BottomMenu