// import React, { useState } from 'react';
import styled from 'styled-components';

// import Navbar from './components/Navbar';
// import Header from './components/Header';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import BottomMenu from './components/BottomMenu';
import ConstructionGif from './assets/construction-under-construction.gif';

const App = () => {
  // const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <Container>
      <img
        src={ConstructionGif}
        alt="cartoon animation with a drilling machine"
      />
      {/* <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
      <BottomMenu isDarkMode={isDarkMode} /> */}
    </Container>
  );
};

const Container = styled.div`
  height: 90vh;
  display: grid;
  place-items: center;
`;

export default App;
