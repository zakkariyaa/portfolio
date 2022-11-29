import styled from 'styled-components';
import { BsSun, BsMoon } from 'react-icons/bs';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const darkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <Nav isDarkMode={isDarkMode}>
      <div className="container">
        <h2>Zakarie</h2>
        <button onClick={darkMode}>
          {isDarkMode ? <BsSun /> : <BsMoon />}
        </button>
        <div className="right_navbar">
          <a href="#projects">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#1d3557' : '#edf2f4')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#edf2f4' : '#1d3557')};
  font-weight: 500;

  .container {
    width: 80%;
    height: 5rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 1.9rem;
      font-family: 'Philosopher', sans-serif;
    }

    .right_navbar {
      display: flex;
      gap: 1.6rem;
      a {
        font-size: 1.1rem;
        position: relative;
        color: inherit;
        ::after {
          content: '';
          height: 2px;
          background-color: ${({ isDarkMode }) =>
            isDarkMode ? '#edf2f4' : '#1d3557'};
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

    button {
      background-color: ${({ isDarkMode }) =>
        isDarkMode ? '#1d3557' : '#edf2f4'};
    }

    button > * {
      cursor: pointer;
      font-size: 1.3rem;
      color: ${({ isDarkMode }) => (isDarkMode ? '#edf2f4' : '#1d3557')};
    }
  }

  @media screen and (max-width: 1024px) {
    .container {
      border: none;
      width: 88%;
      margin: 0;
      h2 {
        margin-left: 2rem;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .container {
      justify-content: center;
      width: 100%;
      h2 {
        display: none;
      }
      .right_navbar {
        display: none;
      }
    }
  }
`;

export default Navbar;
