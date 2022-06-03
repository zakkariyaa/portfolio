import React from 'react'
import styled from 'styled-components'

import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BottomMenu from './components/BottomMenu'

const App = () => {
  return (
    <Container>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BottomMenu />
    </Container>
  )
}

const Container = styled.div``

export default App
