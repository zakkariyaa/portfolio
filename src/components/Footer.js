import React from 'react';
import styled from 'styled-components';

const Footer = ({ isDarkMode }) => {
  return (
    <FooterSection isDarkMode={isDarkMode}>
      <div className="container">
        <p>&copy; 2022 &ndash; Zakarie Yaris. All Rights Reserved</p>
        <p>Made with 🧡 in London, UK</p>
      </div>
    </FooterSection>
  );
};

const FooterSection = styled.section`
  padding-top: 20rem;
  padding-bottom: 4rem;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#1d3557' : '#edf2f4')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#edf2f4' : '#1d3557')};

  .container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    p {
      font-size: 1rem;
      color: ${({ isDarkMode }) => (isDarkMode ? '#edf2f4' : '#2d4cc8')};
      text-align: center;
    }

    p + p {
      color: ${({ isDarkMode }) => (isDarkMode ? '#edf2f4' : '#0c1e50')};
    }
  }

  @media screen and (max-width: 1024px) {
    padding-top: 5rem;
    .container {
      width: 88%;
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 2rem;
    margin-bottom: 4rem;
    .container {
      width: 95%;
      display: grid;
      grid-template-columns: 1fr;
      p {
        font-size: 0.7rem;
        font-weight: normal;
      }
    }
  }
`;

export default Footer;
