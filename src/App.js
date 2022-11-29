import React, { useState } from 'react';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BottomMenu from './components/BottomMenu';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <Container>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
      <BottomMenu isDarkMode={isDarkMode} />
    </Container>
  );
};

const Container = styled.div``;

export default App;
